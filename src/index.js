import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import {createGlobalStyle, ThemeProvider} from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *  {
    padding: 0;
    margin: 0;
    font-family: Consolas;
  }
`

const theme = {
    colors: {
        primary: "blue",
        secondary: "red"
    },
    media: {
        phone: "(max-width: 425px)",
        tablets: "(max-width: 768px) and (min-width: 425px)"
    }
}

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <GlobalStyles />
          <App />
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();