import React from 'react';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import PropTypes from 'prop-types';
import { Text } from './ContactList.styled';

const ContactList = ({ contacts, removeContact }) => {
  return (
    <ul>
      {contacts && contacts.length > 0 ? (
        contacts.map(contact => {
          return (
            <ContactListItem
              key={contact.id}
              name={contact.name}
              number={contact.number}
              id={contact.id}
              removeContact={removeContact}
            />
          );
        })
      ) : (
        <Text>Contact list is empty</Text>
      )}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  removeContact: PropTypes.func.isRequired,
};

export default ContactList;
