import { useState } from "react";
import useBooksContext from '../hooks/use-books-context';

function BookEdit({ onSubmit, book}) {

    const {editBook} = useBooksContext();
    const [newTitle, setNewTitle] = useState(book.title);

    const handleSubmit = (event) => {
        event.preventDefault();
        editBook(book.id , newTitle);
        onSubmit();
        setNewTitle('');
    };

    const handleChange = (event) => {
        const { value } = event.target;
        setNewTitle(value);
    }

    return (<div className="book-edit">
        <form onSubmit={handleSubmit}>
        <label>Title</label>

            <input
                className="input"
                placeholder="New Book Title"
                value={newTitle}
                onChange={handleChange}
            />
            <button
                className="button is-primary" type="submit">
                Save
            </button>
        </form>
    </div>);
};

export default BookEdit;
