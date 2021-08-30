import { ThemeProvider } from '@material-ui/core/styles';
import React, { useState } from 'react';

import Header from './components/Header/Header';
import './App.css';
import { ApplicationTheme } from './theme/Theme';

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
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </ThemeProvider>
  );
}
export default App;
