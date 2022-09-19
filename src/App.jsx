import { IconButton } from "./components/IconButton";
import { PageWrapper } from "./components/PageWrapper";
import { MainPage } from "./layouts/MainPage";
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";


export const GlobalContext = React.createContext(null);

function App() {

  const [globalState, setGlobalState] = useState({significantFigures: 4, value1: null, value2: null});


  const triggerDarkmode = event => {
    if(document.body.classList.contains('darkmode')){
      document.body.classList.remove('darkmode');
      return;
    }
    document.body.classList.add('darkmode');
  }

  return (
    <Router>
      <GlobalContext.Provider value={{globalState, setGlobalState}}>
        <PageWrapper>
          <div style={{position:"absolute",top:16, right:16}} onClick={triggerDarkmode}>
            <IconButton iconName="dark_mode" />
          </div>
          <MainPage></MainPage>
        </PageWrapper>
      </GlobalContext.Provider>
    </Router>
  );
}

export default App;
