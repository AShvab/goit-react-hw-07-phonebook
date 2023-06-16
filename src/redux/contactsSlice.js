import { createSlice, nanoid } from '@reduxjs/toolkit';
import contactsData from '../data/data.json';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsData,

  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      // коли викликається дія addContact, prepare генерує id за допомогою nanoid(). Потім вона повертає об'єкт зі структурою { id, name, number }, який стає значенням payload для дії.
      prepare: ({ name, number }) => {
        const id = nanoid();
        return { payload: { id, name, number } };
      },
    },

    deleteContact: (state, action) => {
      const id = action.payload;
      return state.filter(contact => contact.id !== id);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
