import { createAsyncThunk } from "@reduxjs/toolkit";
import { addContacts, deleteContacts, getContacts } from "services/api";

export const fetchContacts = createAsyncThunk('contacts/fetch',
  async (_, thunkApi) => {
    try {
      const contacts = await getContacts();
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact  = createAsyncThunk('contacts/add',
    async (newContact, thunkApi) => {
        try {
            const contacts  = await addContacts(newContact)
            return contacts;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    },
);

export const deleteContact = createAsyncThunk('contacts/delete',
    async (id, thunkApi) => {
        try {
            const contacts  = await deleteContacts(id)
            return contacts;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);