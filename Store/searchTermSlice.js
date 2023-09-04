import { createSlice, nanoid } from '@reduxjs/toolkit';

const searchTermSlice = createSlice({
    name: 'search',
    initialState: {
        searchTerm: '',
      //  data: [],
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },

    },
});

export const { changeSearchTerm } = searchTermSlice.actions;
export const searchOne = searchTermSlice.reducer;
