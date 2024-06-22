"use client";
import { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState('ro');

  const switchLanguage = () => {
    setLocale(prevLocale => (prevLocale === 'ro' ? 'it' : 'ro'));
  };

  return (
    <LanguageContext.Provider value={{ locale, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
