import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import initialContacts from './data/contacts.json';
import Header from './components/Header';
import Alert from './components/Alert';

import s from './App.module.css';
import alert from './transition/Transition.module.css';
import { v4 as uuid } from 'uuid';

class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
    showAlert: false,
    errorMessage: '',
  };

  toggleAlert = message => {
    this.setState({ showAlert: true, errorMessage: message });
    setTimeout(() => this.setState({ showAlert: false }), 1000);
  };

  formSubmitHandler = (newName, number) => {
    if (!newName || !number) {
      this.toggleAlert('The list is empty');
      return;
    }

    if (
      this.state.contacts.find(
        ({ name }) => name.toLowerCase() === newName.toLowerCase(),
      )
    ) {
      this.toggleAlert('Contact is already exist');
      return;
    }

    const contact = {
      id: uuid(),
      name: newName,
      number,
    };

    // console.log(contact);
    this.setState(prev => {
      return {
        contacts: [...prev.contacts, contact],
      };
    });
  };

  deleteContact = uniqId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== uniqId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  visibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { contacts, filter, showAlert, errorMessage } = this.state;
    const filteredContacts = this.visibleContacts();
    return (
      <>
        <Header />
        <CSSTransition
          in={showAlert}
          timeout={250}
          classNames={alert}
          unmountOnExit
        >
          <Alert>
            <p>{errorMessage}</p>
          </Alert>
        </CSSTransition>
        <section className={s.section}>
          <div className={s.container}>
            <ContactForm onSubmit={this.formSubmitHandler} />

            <h2>Contacts</h2>
            <CSSTransition
              in={contacts.length > 1}
              timeout={250}
              classNames={s}
              unmountOnExit
            >
              {<Filter value={filter} onChange={this.changeFilter} />}
            </CSSTransition>

            <CSSTransition in={contacts.length === 0} timeout={0} unmountOnExit>
              <p className={s.text}>Please, add a new contact</p>
            </CSSTransition>

            <ContactList
              contacts={filteredContacts}
              onRemove={this.deleteContact}
            />
          </div>
        </section>
      </>
    );
  }
}

export default App;
