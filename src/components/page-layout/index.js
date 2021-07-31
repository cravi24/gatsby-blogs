import React from 'react';
import Header from '../header';
import Footer from '../footer';
import { GlobalStyle, PageLayoutContainer } from './style';

const PageLayout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <PageLayoutContainer>
        <Header />
        <main>{children}</main>
        <Footer />
      </PageLayoutContainer>
    </>
  );
};

export default PageLayout;
