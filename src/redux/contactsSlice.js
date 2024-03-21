import { nanoid, createSlice } from '@reduxjs/toolkit';

const contactsReducer = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
    },
    reducers: {
        addContacts: {
            reducer: (state, action) => {
                state.items.push(action.payload);
            },
            prepare: (name, number) => {
                return {
                    payload: {
                        name,
                        number,
                        id: nanoid(),
                    },
                };
            },
        },
        deleteContacts(state, action) {
            const index = state.items.findIndex(contact => contact.id === action.payload);
            state.items.splice(index, 1);
        },
    },
});

export const { addContacts, deleteContacts } = contactsReducer.actions;
export default contactsReducer.reducer;

export const selectContacts = state => state.contacts.items;
