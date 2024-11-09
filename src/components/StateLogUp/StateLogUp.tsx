'use client'

import { createContext, ReactNode, useState } from 'react';

interface AppContextType {
  showLogUp: boolean;
  setShowLogUp: (value: boolean) => void;
  closeLogUp: () => void;
  showLogIn: boolean;
  setShowLogIn: (value: boolean) => void;
  closeLogIn: () => void;
}

const initialState: AppContextType = {
  showLogUp: false,
  setShowLogUp: () => {},
  closeLogUp: () => {},
  showLogIn: false,
  setShowLogIn: () => {},
  closeLogIn: () => {},
};

export const AppContext = createContext<AppContextType>(initialState);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [showLogUp, setShowLogUp] = useState(false);
  const [showLogIn, setShowLogIn] = useState(false);

  const toggleShowLogUp = () => {
    setShowLogUp(!showLogUp);
    if (!showLogUp) setShowLogIn(false); 
  };

  const toggleShowLogIn = () => {
    setShowLogIn(!showLogIn);
    if (!showLogIn) setShowLogUp(false); 
  };

  const closeLogUp = () => setShowLogUp(false); // دالة لإغلاق نافذة التسجيل
  const closeLogIn = () => setShowLogIn(false); // دالة لإغلاق نافذة تسجيل الدخول

  return (
    <AppContext.Provider value={{
      showLogUp,
      setShowLogUp: toggleShowLogUp,
      showLogIn,
      setShowLogIn: toggleShowLogIn,
      closeLogUp,
      closeLogIn // تأكد من تمريرها هنا
    }}>
      {children}
    </AppContext.Provider>
  );
};
