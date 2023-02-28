import { createContext, Dispatch, ReactNode, useState } from "react";

/**
 * Init
 */
type GlobalContextType = {
  isTrue: boolean;
  setIsTrue: Dispatch<boolean>;
  testFunction: () => void;
};

export const defaulGlobalContextType: GlobalContextType = {
  isTrue: false,
  setIsTrue: () => {},
  testFunction: () => {},
};

/**
 * Context
 */
export const GlobalContext = createContext<GlobalContextType>(
  defaulGlobalContextType
);

/**
 * Provider
 */
function GlobalProvider({ children }: { children: ReactNode }) {
  /**
   * States
   */
  const [isTrue, setIsTrue] = useState(false);

  /**
   * Render
   */
  return (
    <GlobalContext.Provider value={{ isTrue, setIsTrue, testFunction }}>
      {children}
    </GlobalContext.Provider>
  );

  function testFunction() {
    console.log("TEST");
  }
}
export default GlobalProvider;