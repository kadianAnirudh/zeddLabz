import { createContext, useState, ReactNode } from 'react';

type MyContextType = {
  name: string;
  setName: (name: string) => void;
};

const defaultMyContextValue: MyContextType = {
  name: '',
  setName: () => {},
};

const MyContext = createContext<MyContextType>(defaultMyContextValue);

type MyContextProviderProps = {
  children: ReactNode;
};

const MyContextProvider = ({ children }: MyContextProviderProps) => {
  const [name, setName] = useState('');

  const contextValue: MyContextType = {
    name,
    setName,
  };

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
