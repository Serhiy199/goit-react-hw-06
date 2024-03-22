import { createSlice } from '@reduxjs/toolkit';

const contactsFilterReducer = createSlice({
    name: 'filters',
    initialState: {
        name: '',
    },
    reducers: {
        nameFilter: {
            reducer: (state, action) => {
                state.name = action.payload;
            },
        },
    },
});

export const { nameFilter } = contactsFilterReducer.actions;
export default contactsFilterReducer.reducer;

export const selectContactsFilter = state => state.filters.name;
