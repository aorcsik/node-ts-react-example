import "core-js/stable";
import "regenerator-runtime/runtime";

import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./App";
import "../scss/index.scss";

const AppWrapper = (): JSX.Element => {
  const prefersDarkMode = false;  // TDOD: useMediaQuery("(prefers-color-scheme: dark)");
  const [manualDarkMode, setManualDarkMode] = React.useState(false);

  const isDarkMode = React.useCallback((manualDarkMode: boolean, prefersDarkMode: boolean) => 
    (manualDarkMode && !prefersDarkMode) || (!manualDarkMode && prefersDarkMode), []);

  const theme = React.useMemo(
    () => { 
      return {
        darkMode: isDarkMode(prefersDarkMode, manualDarkMode)
      };
    },
    [isDarkMode, prefersDarkMode, manualDarkMode],
  );

  return <App darkMode={theme.darkMode}
    toggleManualDarkMode={() => setManualDarkMode(!manualDarkMode)} />;
};

ReactDOM.render(<AppWrapper />, document.getElementById("app"));