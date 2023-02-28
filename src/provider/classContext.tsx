// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createContext, Dispatch, ReactNode, useState, } from 'react';

type ClassContextType = {
    className: string;
    testFunction2: () => void;
  };
  
export const defaultClassContextType: ClassContextType = {
    className: 'default',
    testFunction2: () => {},
  };

/**
 * Context
 */
export const ClassContext = createContext<ClassContextType>(
    defaultClassContextType
  );
//Provider

function ClassProvider({ children }: { children: ReactNode }) {
/**
* States
*/
const [ className ] = useState('default');

/**
* Render
*/
    return (
        <ClassContext.Provider value={{ className, testFunction2 }}>
            {children}
        </ClassContext.Provider>
    );

function testFunction2() {
          console.log("TEST!!");
      }
}
  
export default ClassProvider;