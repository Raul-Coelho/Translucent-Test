import { ThemeProvider } from '@material-ui/core/styles';
import React, { useState } from 'react';

import './App.css';
import { ApplicationTheme } from './theme/Theme';
import SideMenu from './components/SideMenu/SideMenu';

export interface TypeBackground {
  default: string;
  dark: string;
  paper: string;
}

function App(): JSX.Element {
  const [darkMode, setDarkMode] = useState(false);
  const theme = ApplicationTheme(darkMode);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <SideMenu darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </ThemeProvider>
  );
}
export default App;
