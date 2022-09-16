import { createContext } from "react";
import { useState } from "react";

export const ApiContext = createContext();

/**
 * Provid Api state
 * @param { children: JSX.Element } [props] 
 * @returns {JSX.Element}
 */

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

