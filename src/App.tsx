import React from 'react';
import { ThemeProvider } from '@primer/react';
import Navigation from './components/Navigation';
import Route from './route';
import Footer from './components/Footer';
import './App.scss';

// declare type ColorMode = 'day' | 'night'
// declare type Theme = 'night' | 'light'
//
// let colorMode: ColorMode = 'day';
//
// export const GetColorMode = (): ColorMode => colorMode;
//
// export const GetTheme = (mode: ColorMode = colorMode): Theme => (
//   mode === 'day' ? 'night' : 'light'
// );
//
// export const SetColorMode = (value: ColorMode): void => {
//   colorMode = value;
//
//   document.documentElement.setAttribute('data-color-mode', colorMode);
//   document.documentElement.setAttribute('data-dark-theme', GetTheme(value));
// };

export default function App(): React.ReactElement {
  return (
    <ThemeProvider colorMode="auto">
      <div className="app">
        <Navigation />
        <div className="content">
          <Route />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}
