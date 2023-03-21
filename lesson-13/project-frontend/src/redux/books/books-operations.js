import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../../shared/api/books";

export const fetchBooks = createAsyncThunk(
    "books/fetch",
    async(_, thunkAPI) => {
        try {
            const {data} = await api.getAllBooks();
            return data;
        }
        catch({response}) {
            return thunkAPI.rejectWithValue(response);
        }
    }
)

const isDublicate = (books, { title, author }) => {
    const normalizedTitle = title.toLowerCase();
    const normalizedAuthor = author.toLowerCase();
    const dublicate = books.find(item => {
        return (item.title.toLowerCase() === normalizedTitle && item.author.toLowerCase() === normalizedAuthor)
    });

    return Boolean(dublicate);
}

export const addBook = createAsyncThunk(
    "books/add",
    async(data, {rejectWithValue}) => {
        try {
            const {data: result} = await api.addBook(data);
            return result;
        }
        catch({response}) {
            return rejectWithValue(response);
        }
    },
    {
        condition: (data, {getState}) => {
            const {books} = getState();
            if (isDublicate(books.items, data)) {
                alert(`${data.title} - ${data.author} is already exist`);
                return false;
            }
        }
    }
)
export const deleteBook = createAsyncThunk(
    "books/delete",
    async(id, {rejectWithValue}) => {
        try {
            await api.deleteBook(id);
            return id;
        }
        catch({response}) {
            return rejectWithValue(response);
        }
    }
)
