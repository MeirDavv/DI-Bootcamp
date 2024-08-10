import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { selectFilteredBooks, setFilter } from "./booksSlice";

const BookList = () => {
    const dispatch = useDispatch();
    const allBooks = useSelector(selectFilteredBooks);
    const currentFilter = useSelector(state => state.books.filter);

    return(
        <div>
            <div>
                <button onClick={() => dispatch(setFilter('All'))}>All Books</button>
                <button onClick={() => dispatch(setFilter('Horror'))}>Horror Books</button>
                <button onClick={() => dispatch(setFilter('Self-Help'))}>Self-Help Books</button>
                <button onClick={() => dispatch(setFilter('Spirituality'))}>Spirituality Books</button>
                <button onClick={() => dispatch(setFilter('Science Fiction'))}>Science Fiction Books</button>
            </div>
            <div>
                <h1> {currentFilter} Books List</h1>
                <ul>
                    {allBooks.map( book => (
                        <li key = {book.id}>
                            {book.title} by {book.author} ({book.genre})
                        </li>
                    ))}
                </ul>
            </div>
            
        </div>
    )
}


export default BookList