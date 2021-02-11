import React from 'react';
import { CSSTransition } from 'react-transition-group';
import s from './Logo.module.css';

const Logo = () => {
  return (
    <>
      <CSSTransition in={true} appear={true} classNames={s} timeout={500}>
        <h1 className={s.title}>Phonebook</h1>
      </CSSTransition>
    </>
  );
};

export default Logo;
