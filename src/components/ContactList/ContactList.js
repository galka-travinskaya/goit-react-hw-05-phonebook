import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import Alert from '../Alert';
import s from './ContactList.module.css';
import contactTransition from './transitions/ContactTransition.module.css';

const ContactList = ({ contacts, onRemove }) => {
  return (
    <>
      <TransitionGroup component="ul" className={s.list}>
        {contacts.map(({ name, number, id }) => (
          <CSSTransition key={id} classNames={contactTransition} timeout={250}>
            <li className={s.items}>
              <p className={s.text}>
                {name}: {number}
              </p>
              <button
                className={s.delete_btn}
                type="button"
                onClick={() => onRemove(id)}
              >
                Delete
              </button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  onRemove: PropTypes.func.isRequired,
};

export default ContactList;
