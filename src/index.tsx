import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CardGrid from "./CardGrid";
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline  from '@mui/material/CssBaseline';
import { SnackbarProvider } from 'notistack';
import ExtensionAvailabilityCheck from './availabilityCheck';

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <SnackbarProvider maxSnack={3} preventDuplicate>
        <CardGrid />
        <ExtensionAvailabilityCheck />
      </SnackbarProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
