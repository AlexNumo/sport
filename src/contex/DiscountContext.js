import { createContext, useState, useContext } from 'react';

const DiscountContext = createContext();

export const DiscountProvider = ({ children }) => {
  const [isDiscountActive, setIsDiscountActive] = useState(true);

  return (
    <DiscountContext.Provider value={{ isDiscountActive, setIsDiscountActive }}>
      {children}
    </DiscountContext.Provider>
  );
};

export const useDiscount = () => useContext(DiscountContext);
