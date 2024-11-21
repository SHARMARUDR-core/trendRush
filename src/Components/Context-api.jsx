import React, { createContext, useState } from 'react';

export const MyContext = createContext(null);

export const MyProvider = ({ children }) => {
  const [orderItem , setOrderItem] = useState('jai hind');
  return (
    <MyContext.Provider value={{ orderItem , setOrderItem }}>
      {children}
    </MyContext.Provider>
  );
};