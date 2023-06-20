import { createSlice } from '@reduxjs/toolkit';
import {  addContactThunk, deleteContactThunk, fetchContactsThunk } from './operations';
import { initialState } from './initialState';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.contacts = payload;
  state.isLoading = false;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducer: (builder) =>
    builder
    .addCase(fetchContactsThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    })

      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.isLoading = false;        
        state.contacts.push(action.payload);         
      })

      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addMatcher((action) => {action.type.endsWith('/pending')}, handlePending)
      .addMatcher((action) => {action.type.endsWith('/rejected')}, handleRejected)

});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
