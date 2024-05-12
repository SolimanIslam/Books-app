import { useState } from "react";

function BookEdit({ onSubmit, book: { title } }) {

    const [newTitle, setNewTitle] = useState(title);

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(newTitle);
        setNewTitle('');
    };

    const handleChange = (event) => {
        const { value } = event.target;
        setNewTitle(value);
    }

    return (<div className="book-edit">
         <label>Title</label>
        <form onSubmit={handleSubmit}>
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
