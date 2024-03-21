import { createSlice } from '@reduxjs/toolkit';
// import { useDispatch, useSelector } from 'react-redux';
// const selectContacts = useSelector(state => state.contacts.items);

const contactsFilterReducer = createSlice({
    name: 'filters',
    initialState: {
        name: '',
    },
    reducers: {
        nameFilter: {
            reducer: (state, action) => {
                state.name = action.payload;
                // console.log(action.payload);

                // state.items.push(action.payload);
            },
            // prepare: (name, number) => {
            //     return {
            //         payload: {
            //             name,
            //             number,
            //             id: nanoid(),
            //         },
            //     };
            // },
        },
    },
});

export const { nameFilter } = contactsFilterReducer.actions;
export default contactsFilterReducer.reducer;

export const selectContactsFilter = state => state.filters.name;
