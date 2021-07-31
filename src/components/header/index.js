import React from 'react';
import HeaderLayout from './style';
import Logo from '../logo';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <header>
        <HeaderLayout>
          <Link to="/" aria-label="home">
            <Logo />
          </Link>
          <h1>Just like that</h1>
        </HeaderLayout>
    </header>
  );
};

export default Header;
