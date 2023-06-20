// import React, { useEffect } from 'react';
// import Form from './Form';
// import ContactList from './ContactList/ContactList';
// import SearchContact from './SearchContact';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Container, Subtitle, Text, Title, Total } from './App.styled';
// import { useSelector, useDispatch } from 'react-redux';
// // import { addContact, deleteContact } from '../redux/contactsSlice';
// import { selectContacts, selectFilter, selectIsLoading } from 'redux/selectors';
// import { setFilter } from 'redux/filtersSlice';
// import { addContactThunk, deleteContactThunk, fetchContactsThunk } from 'redux/operations';
// import Loader from './Loader/Loader';
// // import { fetchContacts } from 'redux/operations';

// const App = () => {
//   const dispatch = useDispatch();
//   const contacts = useSelector(selectContacts);
//   const filter = useSelector(selectFilter);
//   const isLoading = useSelector(selectIsLoading);

//   useEffect(() => { dispatch(fetchContactsThunk()) }, [dispatch]);

//   const handleAddContact = contact => {
//     const { name } = contact;
//     if (Array.isArray(contacts) && contacts.some(item => item.name.toLowerCase() === name.toLowerCase())) {
//       toast.warning(`${name} is already in contacts`);
//       return;
//     }
//     dispatch(addContactThunk(contact));
//   };

//   const handleRemoveContact = id => {
//     dispatch(deleteContactThunk(id));
//   };

//   const handleSearchContact = event => {
//     const { value } = event.target;
//     dispatch(setFilter(value));
//   };

//   const getFilteredContacts = () => {
//     if (!Array.isArray(contacts)) {
//       return [];
//     }
//     return contacts.filter(({ name }) =>
//       name.toLowerCase().includes(filter.toLowerCase())
//     );
//   };

//   const filteredContacts = getFilteredContacts();
//   console.log(filteredContacts)

//   return (
//     <Container>
//         {isLoading && <Loader />}
//       <Title>PhoneBook</Title>
//       <Form onSubmit={handleAddContact} />
//       <Subtitle>Contacts</Subtitle>
//       <Total>Total contacts: {filteredContacts.length}</Total>
//       <SearchContact searchContact={handleSearchContact} />
//       {filteredContacts.length > 0 ? (
//         <ContactList
//           contacts={filteredContacts}
//           removeContact={handleRemoveContact}
//         />
//       ) : (
//         <Text>Contact list is empty</Text>
//       )}
//       <ToastContainer autoClose={2000} />
//     </Container>
//   );
// };

// export default App;

import React, { useEffect } from 'react';
import Form from './Form';
import ContactList from './ContactList/ContactList';
import SearchContact from './SearchContact';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Subtitle, Text, Title, Total } from './App.styled';
import { useSelector, useDispatch } from 'react-redux';

import { selectContacts, selectFilter, selectIsLoading } from 'redux/selectors';
import { setFilter } from 'redux/filtersSlice';
import {
  addContactThunk,
  deleteContactThunk,
  fetchContactsThunk,
} from 'redux/operations';
import Loader from './Loader/Loader';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

   const handleAddContact = contact => {
    const { name } = contact;
    if (Array.isArray(contacts) && contacts.some(item => item.name.toLowerCase() === name.toLowerCase())) {
      toast.warning(`${name} is already in contacts`);
      return;
    }
    dispatch(addContactThunk(contact));
  };

  const handleRemoveContact = id => {
    dispatch(deleteContactThunk(id));
  };

  const handleSearchContact = event => {
    const { value } = event.target;
    dispatch(setFilter(value));
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
