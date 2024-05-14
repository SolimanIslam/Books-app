import { useState, useContext } from 'react';
import BookEdit from './BookEdit'
import  BooksContext  from '../context/books';

function BookShow({ book }) {

    const {deleteBook} = useContext(BooksContext);
    const [bookEditShow, setBookEditShow] = useState(false);

    const handleEditSubmit = () => {
        setBookEditShow(false);
    };
    const showBookEdit = () => { setBookEditShow(!bookEditShow); };
    const handleDelete = () => { deleteBook(book.id); };


    return (
        <div className='book-show'>
            <img alt='book-image' src={`https://picsum.photos/seed/${book.id}/300/200`} />

            <div>{bookEditShow ?
                <BookEdit
                    onSubmit={handleEditSubmit}
                    book={book}
                /> : <p>{book.title}</p>
            }
            </div>

            <div className='actions'>
                <button
                    className='edit'
                    onClick={showBookEdit}>
                    Edit
                </button>

                <button
                    className='delete'
                    onClick={handleDelete}>
                    Delete
                </button>
            </div>




        </div>);
};

export default BookShow;
