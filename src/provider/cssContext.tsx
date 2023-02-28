// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createContext, Dispatch, ReactNode, useState, } from 'react';

type CSSContextType = {
    hiContrastOn: boolean;
    bigButtonsOn: boolean;
    /*
    toggleHiContrast: Dispatch<boolean>,
    toggleBigButtons: Dispatch<boolean>,*/
  };
  
export const defaultCSSContextType: CSSContextType = {
    hiContrastOn: false,
    bigButtonsOn: false,
    /*
    toggleHiContrast: () => { },
    toggleBigButtons: () => { }*/
  };

/**
 * Context
 */
export const CSSContext = createContext<CSSContextType>(
    defaultCSSContextType
  );
//Provider

function CSSProvider({ children }: { children: ReactNode }) {
    /**State**/
    const [hiContrastOn] = useState(false);
    const [bigButtonsOn] = useState(false);

    /**
    * Render
    */
    return (
        <CSSContext.Provider value={{
            hiContrastOn, bigButtonsOn, /*toggleBigButtons, toggleHiContrast*/
        }}>
            {children}
        </CSSContext.Provider>
    );
    
    /*function toggleBigButtons() {
        setToggle(!bigButtonsOn);
    }

    function toggleHiContrast() {
    }*/
}
export default CSSProvider;