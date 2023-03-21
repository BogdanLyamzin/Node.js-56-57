import { createSlice } from "@reduxjs/toolkit";

import {fetchBooks, addBook, deleteBook} from "./books-operations";

const initialState = {
    items: [],
    loading: false,
    error: null,
}

const booksSlice = createSlice({
    name: "books",
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchBooks.pending, state => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchBooks.fulfilled, (state, {payload}) => {
            state.loading = false;
            state.items = payload;
        })
        .addCase(fetchBooks.rejected, (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        })
        .addCase(addBook.pending, state => {
            state.loading = true;
            state.error = null;
        })
        .addCase(addBook.fulfilled, (state, {payload}) => {
            state.loading = false;
            state.items.push(payload);
        })
        .addCase(addBook.rejected, (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        })
        .addCase(deleteBook.pending, state => {
            state.loading = true;
            state.error = null;
        })
        .addCase(deleteBook.fulfilled, (state, {payload}) => {
            state.loading = false;
            state.items = state.items.filter(({_id}) => _id !== payload);
        })
        .addCase(deleteBook.rejected, (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        })
    }
})

export default booksSlice.reducer;