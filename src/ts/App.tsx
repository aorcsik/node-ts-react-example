
import * as React from "react";

type AppProps = {
  darkMode: boolean;
  toggleManualDarkMode: () => void;
}

type AppState = Record<string, never>;

class App extends React.Component<AppProps, AppState>
{
  state: AppState = {};

  render(): React.ReactNode {
    return <div>
      <h1>Hello World!</h1>
    </div>;
  }
}

export default App;