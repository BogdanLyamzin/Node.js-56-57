export const getBooks = ({books}) => books.items;

export const getFavoriteBooks = ({books}) => {
    return books.items.filter(({favorite}) => favorite);
}

export const getFilteredBooks = ({filter, books}) => {
    if(!filter) {
        return books.items;
    }
    const normalizedFilter = filter.toLowerCase();
    const result = books.items.filter(({title, author}) => {
        return (title.toLowerCase().includes(normalizedFilter) || author.toLowerCase().includes(normalizedFilter))
    })

    return result;
}