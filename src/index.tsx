import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider } from '@primer/react';
import reportWebVitals from './reportWebVitals';
import Navigation from './components/navigation';
import Footer from './components/footer';
import Route from './route';

declare type ColorMode = 'day' | 'night'
let colorMode: ColorMode = 'day';

export const GetColorMode = (): ColorMode => colorMode;

export const SetColorMode = (value: ColorMode): void => {
  colorMode = value;
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider colorMode={GetColorMode()}>
      <Navigation />
      <Route />
      <Footer />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
