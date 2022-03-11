import React from 'react';
import { ThemeProvider } from '@primer/react';
import Navigation from './navigation';
import Footer from './footer';

declare type ColorMode = 'day' | 'night'
let colorMode: ColorMode;

declare type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps): React.ReactElement {
  const GetColorMode = (): ColorMode => 'day';

  return (
    <ThemeProvider colorMode={GetColorMode()}>
      <Navigation />
      {children}
      <Footer />
    </ThemeProvider>
  );
}
