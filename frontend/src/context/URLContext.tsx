import React, { createContext, useContext, useState, ReactNode } from 'react';

interface URLContextProps {
    shortUrl: string | null;
    setShortUrl: (url: string | null) => void;
}

const URLContext = createContext<URLContextProps | undefined>(undefined);

export const useURLContext = () => {
  const context = useContext(URLContext);
  if (!context) {
    throw new Error("useURLContext must be used within a URLProvider");
  }
  return context;
};

interface URLProviderProps {
  children: ReactNode;
}

export const URLProvider: React.FC<URLProviderProps> = ({ children }) => {

  const [shortUrl, setShortUrl] = useState<string | null>(null);


  return (
    <URLContext.Provider value={{ shortUrl, setShortUrl }}>
      {children}
    </URLContext.Provider>
  );
};
