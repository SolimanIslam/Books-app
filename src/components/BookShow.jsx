import { useState } from 'react';
import BookEdit from './BookEdit'


function BookShow({ book, onEdit, onDelete }) {
    const [bookEditShow, setBookEditShow] = useState(false);

    const handleEditSubmit = (newTitle) => {
        setBookEditShow(false);
        onEdit(book.id, newTitle);
    };
    const showBookEdit = () => { setBookEditShow(!bookEditShow); };
    const handleDelete = () => { onDelete(book.id); };


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
