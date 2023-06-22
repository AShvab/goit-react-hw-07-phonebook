import React, { useEffect } from 'react';
import Form from './Form';
import ContactList from './ContactList/ContactList';
import SearchContact from './SearchContact';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Subtitle, Title, Total } from './App.styled';
import { useSelector, useDispatch } from 'react-redux';

import { setFilter } from 'redux/filtersSlice';
import { addContact, deleteContact, fetchContacts } from 'redux/operations';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
} from 'redux/selectors';
import { nanoid } from '@reduxjs/toolkit';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = contact => {
    const { name } = contact;
    if (contacts.some(item => item.name.toLowerCase() === name.toLowerCase())) {
      toast.warning(`${name} is already in contacts`);
      return;
    }
    dispatch(addContact(contact));
  };

  const handleRemoveContact = id => {
    dispatch(deleteContact(id));
  };

  const handleSearchContact = event => {
    const { value } = event.target;
    dispatch(setFilter(value));
  };

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <Container>
      <Title>PhoneBook</Title>
      <Form onSubmit={handleAddContact} />
      <Subtitle>Contacts</Subtitle>
      <Total>Total contacts: {filteredContacts.length}</Total>
      <SearchContact filter={filter} searchContact={handleSearchContact} />
      <ContactList
        contacts={filteredContacts}
        removeContact={handleRemoveContact}
      />
      <ToastContainer autoClose={2000} />
    </Container>
  );
};

export default App;
