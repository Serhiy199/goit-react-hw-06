import { initialState } from './store';
// import { nanoid } from 'nanoid';
import { createAction, createReducer, nanoid } from '@reduxjs/toolkit';

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

export const contactsReducer = createReducer([], builder => {
    builder
        .addCase(addContacts, (state, action) => {
            return {
                ...state,
                contacts: {
                    ...state.contacts,
                    items: [...state.contacts.items, action.payload],
                },
            };
        })
        .addCase(deleteContacts, (state, action) => {
            return {
                ...state,
                contacts: {
                    ...state.contacts,
                    items: state.contacts.items.filter(contact => contact.id !== action.payload),
                },
            };
        });
});

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

export const addContacts = createAction('items/addContacts', (nameCont, number) => {
    return {
        payload: {
            id: nanoid(),
            name: nameCont,
            number,
        },
    };
});

export const deleteContacts = createAction('items/deleteContacts');
