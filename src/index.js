import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider, unstable_createMuiStrictModeTheme, StyledEngineProvider } from '@mui/material/styles';
import { themeOptions } from './config/theme';
import CssBaseline from '@mui/material/CssBaseline';

const theme = unstable_createMuiStrictModeTheme(themeOptions);

ReactDOM.render(
  <React.StrictMode>
    <StyledEngineProvider>
    <CssBaseline />
    <ThemeProvider theme={theme}><App /></ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
