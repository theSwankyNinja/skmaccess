import React, { useContext } from 'react';
import { ClassContext } from '../provider/classContext';

const AppHeader = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const classy = useContext(ClassContext)
    return (
        <div>
            <header id="banner">
                <h1>Accessibility Using React.js & Reach UI</h1>
            </header>
        </div>
    );
};

export default AppHeader; 