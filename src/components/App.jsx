import React from 'react';
import Form from './Form';
import ContactList from './ContactList/ContactList';
import SearchContact from './SearchContact';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Subtitle, Text, Title, Total } from './App.styled';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact } from '../redux/contactsSlice';
import { selectContacts, selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/filtersSlice';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

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
