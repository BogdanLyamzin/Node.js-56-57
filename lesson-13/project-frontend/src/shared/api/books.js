import instance from "./auth";

export const getAllBooks = ()=> instance.get("/books");

export const deleteBook = id => {
    return instance.delete(`/books/${id}`)
}

export const addBook = data => {
    return instance.post("/books", data);
}