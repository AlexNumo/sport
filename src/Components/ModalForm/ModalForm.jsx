import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import countries from 'i18n-iso-countries';

import enLocale from 'i18n-iso-countries/langs/en.json';
import ruLocale from 'i18n-iso-countries/langs/ru.json';
import deLocale from 'i18n-iso-countries/langs/de.json';
import uaLocale from 'i18n-iso-countries/langs/uk.json';
import {
  StyledPhoneInput,
  Backdrop,
  ModalContent,
  Input,
  Label,
  SubmitButton,
  Error,
} from './ModalForm.Styled';
import 'react-phone-input-2/lib/style.css';

countries.registerLocale(enLocale);
countries.registerLocale(ruLocale);
countries.registerLocale(deLocale);
countries.registerLocale(uaLocale);

const ModalForm = ({ isOpen, onClose }) => {
  const API_KEY = 'patAlxs1Nrj6cRQmq.1d3e103c92bd20adf5fafc772e8c0d634814a262cc4a6d60593eaec25b5c8da7';
  const BASE_ID = 'appXfnvKZaDDJAvGb';
  const TABLE_NAME = 'Contacts';

  const { t } = useTranslation();
  const modalRef = useRef(null);

  const [isClosing, setIsClosing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    countryCode: 'UA',
    country: 'Ukraine',
  });
  const [errors, setErrors] = useState({});

  const closeWithAnimation = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300);
  };

  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeWithAnimation();
    }
  };

  const handleEscape = (e) => {
    if (e.key === 'Escape') closeWithAnimation();
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  if (!isOpen && !isClosing) return null;

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = t('form.errors.required');
    if (!formData.lastName) newErrors.lastName = t('form.errors.required');
    if (!formData.email) {
      newErrors.email = t('form.errors.required');
    } else if (!formData.email.includes('@')) {
      newErrors.email = t('form.errors.invalidEmail');
    }
    if (!formData.phone) {
      newErrors.phone = t('form.errors.required');
    } else if (formData.phone.length < 6) {
      newErrors.phone = t('form.errors.invalidPhone');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (phone, data) => {
    const fullCountryName = countries.getName(data.countryCode?.toUpperCase(), 'en') || data.countryCode;
    setFormData({
      ...formData,
      phone,
      countryCode: data.countryCode?.toUpperCase() || '',
      country: fullCountryName,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const recordData = {
      fields: {
        "First Name": formData.firstName,
        "Last Name": formData.lastName,
        "Email": formData.email,
        "Phone": '+' + formData.phone,
        "Country": formData.country,
      },
    };

    try {
      const response = await fetch(`https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(recordData),
      });

      if (!response.ok) {
        throw new Error(`Airtable error: ${response.status}`);
      }

      console.log('✅ Submitted to Airtable:', await response.json());
      closeWithAnimation();
    } catch (error) {
      console.error('❌ Submission failed:', error);
    }
  };

  return (
    <Backdrop onClick={handleBackdropClick}>
      <ModalContent ref={modalRef} className={isClosing ? 'closing' : ''}>
        <form onSubmit={handleSubmit}>
          <Label>{t('form.firstName')}</Label>
          <Input name="firstName" value={formData.firstName} onChange={handleChange} maxLength={30} />
          {errors.firstName && <Error>{errors.firstName}</Error>}

          <Label>{t('form.lastName')}</Label>
          <Input name="lastName" value={formData.lastName} onChange={handleChange} maxLength={30} />
          {errors.lastName && <Error>{errors.lastName}</Error>}

          <Label>{t('form.email')}</Label>
          <Input name="email" type="email" value={formData.email} onChange={handleChange} maxLength={50} />
          {errors.email && <Error>{errors.email}</Error>}

          <Label>{t('form.phone')}</Label>
          <StyledPhoneInput
            country={formData.countryCode.toLowerCase()}
            value={formData.phone}
            onChange={handlePhoneChange}
            countryCodeEditable={false}
            inputProps={{ name: 'phone', required: true }}
          />
          {errors.phone && <Error>{errors.phone}</Error>}

          <SubmitButton type="submit">{t('form.submit')}</SubmitButton>
        </form>
      </ModalContent>
    </Backdrop>
  );
};

export default ModalForm;