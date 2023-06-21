import { createAsyncThunk } from "@reduxjs/toolkit";
import { addContacts, deleteContacts, getContacts } from "services/api";

export const fetchContactsThunk = createAsyncThunk(
  
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      const contacts = await getContacts();
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk  = createAsyncThunk(
  'contacts/addContact',
    async (newContact, thunkApi) => {
        try {
            const contacts  = await addContacts(newContact)
            return contacts;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    },
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
    async (id, thunkApi) => {
        try {
            const contacts  = await deleteContacts(id)
            return contacts;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);