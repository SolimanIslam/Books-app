import { createContext, useState, useCallback } from "react";
import axios from "axios";

const baseUrl = 'http://localhost:3001/books';

const BooksContext = createContext();

function Provider({ children }) { 
    const [books, setBooks] = useState([]);

    const fetchBooks = useCallback(async () => {
        const result = await axios.get(baseUrl);
        setBooks(result.data);
    },[]); 


    const createBook = async(title) => {
        const result = await axios.post(baseUrl, { title });

        const updatedBooks = [...books, result.data];
        setBooks(updatedBooks);
    };
    const deleteBook = async (id) => {
        axios.delete(baseUrl+'/'+id);
        const updatedBooks = books.filter(book => book.id !== id);
        setBooks(updatedBooks);
    };

    const editBook = async(id, newTitle) => {
        const result = await axios.put(baseUrl + '/' + id, {
            title: newTitle
        });

        const updatedBooks = books.map(book => {
            if (book.id === id) {
                return {...book, ...result.data};
            } else {
                return book;
            }

        });
        setBooks(updatedBooks);
    }

    const valuesToShare = {books ,fetchBooks, createBook , deleteBook , editBook}; 

return (
    <BooksContext.Provider value={valuesToShare}>
        {children}
    </BooksContext.Provider>
);
};

export {Provider };
export default BooksContext;