import { createContext } from "react";
import { useState } from "react";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [api, setApi] = useState(true);
  const toggleApi = () => {
    setApi(!api);
  };

  return (
    <ApiContext.Provider value={{ api, toggleApi }}>
      {children}
    </ApiContext.Provider>
  );
};

