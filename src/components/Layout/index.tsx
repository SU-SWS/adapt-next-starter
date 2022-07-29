import React, { FC, ReactChild } from 'react';
import { Footer } from '../Footer/Footer';
import { FlexBox, Masthead, Skiplink } from '..';

export interface LayoutProps {
  children: ReactChild;
}

const Layout: FC<LayoutProps> = ({ children }) => (
  <FlexBox direction="col" className="su-min-h-screen">
    <Skiplink />
    <Masthead />
    {children}
    <Footer />
  </FlexBox>
);

export default Layout;
