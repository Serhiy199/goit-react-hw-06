// import { initialState } from './store';
// import { nanoid } from 'nanoid';
import { createAction, createReducer, nanoid, createSlice } from '@reduxjs/toolkit';

// export const contactsReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'items/addContacts': {
//             return {
//                 ...state,
//                 contacts: {
//                     ...state.contacts,
//                     items: [...state.contacts.items, action.payload],
//                 },
//             };
//         }

//         case "items/deleteContacts": {
//             return {
//                 ...state,
//                 contacts: {
//                     ...state.contacts,
//                     items: state.contacts.items.filter(contact => contact.id !== action.payload),
//                 },
//             };
//         }
//         default:
//             return state;
//     }
// };

// export const contactsReducer = createReducer([], builder => {
//     builder
//         .addCase(addContacts, (state, action) => {
//             return {
//                 ...state,
//                 contacts: {
//                     ...state.contacts,
//                     items: [...state.contacts.items, action.payload],
//                 },
//             };
//         })
//         .addCase(deleteContacts, (state, action) => {
//             return {
//                 ...state,
//                 contacts: {
//                     ...state.contacts,
//                     items: state.contacts.items.filter(contact => contact.id !== action.payload),
//                 },
//             };
//         });
// });

const contactsReducer = createSlice({
    name: 'contacts',
    initialState: {
        items: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        ],
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

export const selectContacts = state => state.contacts.contacts.items;

// export const addContacts = (name, number) => {
//     return {
//         type: 'items/addContacts',
//         payload: {
//             id: nanoid(),
//             name,
//             number,
//         },
//     };
// };

// export const deleteContacts = contactId => {
//     return {
//         type: 'items/deleteContacts',
//         payload: contactId,
//     };
// };

// export const addContacts = createAction('items/addContacts', (nameCont, number) => {
//     return {
//         payload: {
//             id: nanoid(),
//             name: nameCont,
//             number,
//         },
//     };
// });

// export const deleteContacts = createAction('items/deleteContacts');
