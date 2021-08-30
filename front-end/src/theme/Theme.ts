import { createTheme } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';
import { TypeBackground } from '@material-ui/core/styles/createPalette';
import { useMemo } from 'react';

// export const ApplicationTheme = (darkMode: Theme) => createTheme({
//   palette: {
//     primary: {
//       main: '#F95A10',
//     },
//     secondary: {
//       main: '#FAFFFD',
//     },
//   },
// });

export const ApplicationTheme = (darkMode: boolean) => {
  const theme = useMemo(
    () => createTheme({
      palette: {
        type: darkMode ? 'dark' : 'light',
        primary: {
          main: '#F95A10',
        },
        secondary: {
          main: '#FAFFFD',
        },
        background: {
          default: darkMode ? '#232323' : '#FFF',
          paper: darkMode ? '#232323' : '#FFF',
        },

      },
    }),
    [darkMode],
  );

  return theme;
};
