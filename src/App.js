import { useState, useEffect } from 'react';
import axios from 'axios';
import BookList from './components/BookList'
import BookCreate from './components/BookCreate'
const baseUrl = 'http://localhost:3001/books';


function App() {

    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const result = await axios.get(baseUrl);
        setBooks(result.data);
    };

    useEffect(() => {
        fetchBooks();
    }, []);

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


    return (
        <div className='app'>
            <h1>Reading List</h1>

            <BookList books={books} onDelete={deleteBook} onEdit={editBook} />

            <BookCreate onCreate={createBook} />
        </div>);
};

export default App;
