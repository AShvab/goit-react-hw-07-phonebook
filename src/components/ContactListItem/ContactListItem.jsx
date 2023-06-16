import React from 'react';
import PropTypes from 'prop-types';
import { Button, Item } from './ContactListItem.styled';

const ContactListItem = ({name, number, id, removeContact}) => {
  return (
    <Item>      
      <p>{name}: {number}</p>
      <Button onClick={() => removeContact(id)} type="button">Delete</Button>
    </Item>
  )
}

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    removeContact: PropTypes.func.isRequired,
  };

export default ContactListItem;

