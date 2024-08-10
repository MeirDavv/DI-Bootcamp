import {createSlice, createSelector} from '@reduxjs/toolkit'

const initialState = {
    allBooks: [
        { id: 1, title: 'Power of now', author: 'Ekhart Tolle', genre: 'Spirituality' },
        { id: 2, title: 'Power of habit', author: 'Chrles Duhigg', genre: 'Self-Help' },
        { id: 3, title: 'It', author: 'Stephen King', genre: 'Horror' },
        { id: 4, title: 'Dune', author: 'Frank Herbert', genre: 'Science Fiction' },
    ],
    filter: 'All'
}

export const booksSlice = createSlice({
    name:'books',
    initialState,
    reducers:{
        addBook: (state, action) => {
            const newBook = {
                id: action.payload.id,
                title: action.payload.title,
                author: action.payload.author,
                genre: action.payload.genre
            }
            state.allBooks.push(newBook)
        },
        removeBook: (state,action) => {
            state.allBooks = state.allBooks.filter(book => book.id !== action.payload.id)
        },
        setFilter: (state,action) => {
            state.filter = action.payload;
        },
    },
})

export const selectAllBooks = (state) => state.books.allBooks;

export const selectFilteredBooks = createSelector (
    [selectAllBooks, (state) => state.books.filter],
    (allBooks,filter) => {
        if(filter ==='All'){
            return allBooks;
        }
        return allBooks.filter(book => book.genre === filter);
    }
);

export const {addBook, removeBook, setFilter} = booksSlice.actions
export default booksSlice.reducer