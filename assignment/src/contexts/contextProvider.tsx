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
  const [name, setName] = useState(() => {
    // Retrieve the name from local storage or use an empty string as the default value
    return localStorage.getItem('name') || '';
  });

  const handleSetName = (newName: string) => {
    // Update the name state
    setName(newName);
    // Store the name in local storage
    localStorage.setItem('name', newName);
  };

  const contextValue: MyContextType = {
    name,
    setName: handleSetName,
  };

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
};


export { MyContext, MyContextProvider };
