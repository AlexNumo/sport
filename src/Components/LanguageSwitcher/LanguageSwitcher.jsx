import { useState } from 'react';
import { DropdownWrapper, DropdownButton, DropdownMenu, DropdownItem } from './LanguageSwitcher.Styled';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const [open, setOpen] = useState(false);

  const handleSelect = (lang) => {
    i18n.changeLanguage(lang);
    setOpen(false);
  };
    const { i18n } = useTranslation();

  return (
    <DropdownWrapper>
      <DropdownButton onClick={() => setOpen(!open)}>🌐 {i18n.language.toUpperCase()}</DropdownButton>
      {open && (
        <DropdownMenu>
          <DropdownItem onClick={() => handleSelect('ua')}>Українська</DropdownItem>
          <DropdownItem onClick={() => handleSelect('en')}>English</DropdownItem>
          <DropdownItem onClick={() => handleSelect('de')}>Deutsch</DropdownItem>
          <DropdownItem onClick={() => handleSelect('ru')}>Русский</DropdownItem>
        </DropdownMenu>
      )}
    </DropdownWrapper>
  );
};

export default LanguageSwitcher;
