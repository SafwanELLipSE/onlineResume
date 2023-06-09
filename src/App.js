import React from "react";

import InitialLanding from "./components/InitialLanding/InitialLanding";
import ResumeMain from "./components/ResumeMain/ResumeMain";
import PortfolioMain from "./components/PortfolioMain/PortfolioMain";

// React Router
import {
  Routes,
  Route
} from "react-router-dom";

// styles
import styles from "./App.module.css"

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/onlineResume" element={<InitialLanding />}/>
        <Route path="/resume" element={<ResumeMain />}/>
        <Route path="/portfolio" element={<PortfolioMain />}/>
      </Routes>
    </div>
  );

}

export default App;
