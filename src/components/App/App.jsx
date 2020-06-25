import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactListContainer';
import Filter from '../Filter/FilterContainer';
import Notification from '../Notification/Notification';
import { filterContacts } from '../../utilities/utilities';
import slideTransition from '../../transitions/slide.module.css';
import fadeTransition from '../../transitions/fade.module.css';
import notificationTransition from '../../transitions/notification-transition.module.css';

const App = ({
  contacts,
  filter,
  notificationIsOpen,
  toggleNotification,
  onSave,
  loadPreviousContacts,
}) => {
  const previousContacts = localStorage.getItem('contacts');

  useEffect(() => {
    if (previousContacts) {
      loadPreviousContacts(JSON.parse(previousContacts));
    }
  }, [previousContacts]);

  const addContact = contact => {
    if (contacts.some(elem => elem.name === contact.name)) {
      toggleNotification();
      setTimeout(toggleNotification, 2500);
      return;
    }
    onSave(contact);
  };

  const filteredContacts = filterContacts(contacts, filter);

  return (
    <>
      <CSSTransition in timeout={500} classNames={slideTransition} appear>
        <h1 className="title">Phonebook</h1>
      </CSSTransition>

      <CSSTransition
        in={notificationIsOpen}
        timeout={250}
        classNames={notificationTransition}
        unmountOnExit
      >
        <Notification />
      </CSSTransition>

      <ContactForm onAddContact={addContact} />

      <CSSTransition
        in={contacts.length >= 2}
        timeout={250}
        classNames={fadeTransition}
        unmountOnExit
      >
        <Filter />
      </CSSTransition>

      {!!contacts.length && <ContactList contacts={filteredContacts} />}
    </>
  );
};

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
  filter: PropTypes.string.isRequired,
  notificationIsOpen: PropTypes.bool.isRequired,
  toggleNotification: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  loadPreviousContacts: PropTypes.func.isRequired,
};

export default App;
