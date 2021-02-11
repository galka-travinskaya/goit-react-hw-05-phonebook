import React from 'react';
import Logo from '../Logo';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.container}>
      <Logo />
    </header>
  );
};

export default Header;
