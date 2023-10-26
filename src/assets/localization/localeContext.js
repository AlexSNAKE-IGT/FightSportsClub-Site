import React, { createContext, useContext, useState } from 'react';

const LocaleContext = createContext(undefined);

export function LocaleProvider({ children }) {
    const [currentLocale, setCurrentLocale] = useState('ru');
    return (
        <LocaleContext.Provider value={{ currentLocale, setCurrentLocale }}>
            {children}
        </LocaleContext.Provider>
        );
}

export function useLocale() {
    return useContext(LocaleContext);
}
