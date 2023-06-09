import React from "react";

import InitialLanding from "./components/InitialLanding/InitialLanding";

// styles
import styles from "./App.module.css"

function App() {
  return (
    <div className={styles.App}>
      <InitialLanding />
    </div>
  );
}

export default App;
