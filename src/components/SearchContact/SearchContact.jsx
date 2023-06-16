import React from 'react';
import PropTypes from 'prop-types';
import { Input, LabelForm } from 'components/Form/Form.styled';
import { Filter } from './SearchContact.styled';

const SearchContact = ({ searchContact }) => {
  return (
    <Filter>
      <LabelForm htmlFor="filter">Find contacts by name:</LabelForm>
      <Input type="text" id="filter" name="filter" onChange={searchContact} />
    </Filter>
  );
};

SearchContact.propTypes = {
  searchContact: PropTypes.func.isRequired,
};

export default SearchContact;
