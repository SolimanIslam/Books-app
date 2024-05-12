import BookList from './components/BookList'
import BookCreate from './components/BookCreate'
import { useState } from 'react';



function App() {

    const [books, setBooks] = useState([]);

    const createBook = (title) => {
        const id = Math.floor(Math.random() * 9999);

        const newBook = { id, title };

        const updatedBooks = [...books, newBook];

        console.log(id, title, newBook, updatedBooks);
        setBooks(updatedBooks);
    };

    const deleteBook = (id) => {
        const updatedBooks = books.filter(book => book.id !== id);
        setBooks(updatedBooks);
    };

    const editBook = (id, newTitle) => {
        const updatedBooks = books.map(book => {
            if (book.id === id) {
                const newBook = { ...book, title: newTitle };
                return newBook;
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
