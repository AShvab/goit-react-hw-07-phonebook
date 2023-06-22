import React from 'react';
import PropTypes from 'prop-types';
import { Input, LabelForm } from 'components/Form/Form.styled';
import { Filter } from './SearchContact.styled';

const SearchContact = ({ filter, searchContact }) => {
  return (
    <Filter>
      <LabelForm>Find contacts by name:</LabelForm>
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={searchContact}
      />
    </Filter>
  );
};

SearchContact.propTypes = {
  filter: PropTypes.string.isRequired,
  searchContact: PropTypes.func.isRequired,
};

export default SearchContact;
