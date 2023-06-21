import React, { useEffect } from 'react';
import Form from './Form';
import ContactList from './ContactList/ContactList';
import SearchContact from './SearchContact';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Subtitle, Text, Title, Total } from './App.styled';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
} from 'redux/selectors';
import {
  addContactThunk,
  deleteContactThunk,
  fetchContactsThunk,
} from 'redux/operations';
import { setFilter } from 'redux/filtersSlice';
import Loader from './Loader/Loader';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const handleAddContact = contact => {
    const { name } = contact;
    if (contacts.some(item => item.name.toLowerCase() === name.toLowerCase())) {
      toast.warning(`${name} is already in contacts`);
      return;
    }
    dispatch(addContactThunk(contact));
  };

  const handleRemoveContact = id => {
    dispatch(deleteContactThunk(id));
  };

  const handleSearchContact = event => {
    dispatch(setFilter(event.currentTarget.value));
  };

  const getFilteredContacts = () => {
    if (!Array.isArray(contacts)) {
      return [];
    }
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };
    const filteredContacts = getFilteredContacts();

  return (
    <Container>
      {isLoading && <Loader />}
      {error !== null && <p>{error}</p>}
      <Title>PhoneBook</Title>
      <Form onSubmit={handleAddContact} />
      <Subtitle>Contacts</Subtitle>
      <Total>Total contacts: {filteredContacts.length}</Total>
      <SearchContact searchContact={handleSearchContact} />
      {filteredContacts.length > 0 ? (
        <ContactList
          contacts={filteredContacts}
          removeContact={handleRemoveContact}
        />
      ) : (
        <Text>Contact list is empty</Text>
      )}
      <ToastContainer autoClose={2000} />
    </Container>
  );
};

export default App;
