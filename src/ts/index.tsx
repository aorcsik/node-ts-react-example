import "core-js/stable";
import "regenerator-runtime/runtime";

import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./App";
import "../scss/index.scss";

const AppWrapper = (): JSX.Element => {
  const prefersDarkMode = false;  // TDOD: useMediaQuery("(prefers-color-scheme: dark)");
  const [manualDarkMode, setManualDarkMode] = React.useState(false);

  const isDarkMode = (manualDarkMode: boolean, prefersDarkMode: boolean) => 
    (manualDarkMode && !prefersDarkMode) || (!manualDarkMode && prefersDarkMode);

  const theme = React.useMemo(
    () => {
      darkMode: isDarkMode(prefersDarkMode, manualDarkMode)
    },
    [prefersDarkMode, manualDarkMode],
  );

  return <App darkMode={isDarkMode(prefersDarkMode, manualDarkMode)}
    toggleManualDarkMode={() => setManualDarkMode(!manualDarkMode)} />;
};

ReactDOM.render(<AppWrapper />, document.getElementById("app"));