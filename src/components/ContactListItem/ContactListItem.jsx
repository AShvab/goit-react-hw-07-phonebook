import React from 'react';
import PropTypes from 'prop-types';
import { Button, Item } from './ContactListItem.styled';
import { useDispatch } from 'react-redux';

const ContactListItem = ({name, number, id, removeContact}) => {
  const dispatch = useDispatch();   
  return (
    <Item>      
      <p>{name}: {number}</p>
      <Button onClick={() => dispatch(removeContact(id))} type="button">Delete</Button>
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


