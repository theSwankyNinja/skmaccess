import * as React from 'react';
import './App.css';
import AppHeader from './AppHeader'
import ExpandBox from './expandBox'
import GlobalProvider from './provider/GlobalController';


function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <AppHeader />
        <ExpandBox />
      </GlobalProvider>
    </div>
  );
}

export default App;
