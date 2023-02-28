import * as React from 'react';
import './App.css';
import AppHeader from './Components/AppHeader'
import ExpandBox from './expandBox'
import ClassProvider from './provider/classContext';
import GlobalProvider from './provider/GlobalController';
import Toggler from './Components/Toggler'

function App() {
  return (
    <div className="App">
      <ClassProvider>
      <GlobalProvider>
          <AppHeader />
          <ExpandBox />
          <Toggler />
      </GlobalProvider>
      </ClassProvider>

    </div>
  );
}

export default App;
