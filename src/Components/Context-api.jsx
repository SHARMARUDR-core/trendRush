import React, { createContext, useState } from 'react';

export const MyContext = createContext(null);

export const MyProvider = ({ children }) => {
  const [login, setLogin] = useState('login');
  return (
    <MyContext.Provider value={{ login, setLogin }}>
      {children}
    </MyContext.Provider>
  );
};