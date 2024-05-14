# Books App v1.3 - 3-Communication-Using-the-Context-System

The Books App v1.3 introduces a significant refactor using context (BooksContext), where the application state is defined centrally. This allows all components to access the BooksContext directly, eliminating the need for prop drilling down the components tree.

## Previous Versions

- Version v1.0: [Branch: 1-unpersisted-books](https://github.com/SolimanIslam/Books-app/tree/1-unpersisted-books)
- Version v1.2: [Branch: 2-persisted-books](https://github.com/SolimanIslam/Books-app/tree/2-persisted-books)


## Features

- Add books with titles
- Display book cards with images from picsum.com
- Edit book details
- Delete books
- Persistently store book list using JSON-server
- Fetch books from API server on app start
- Update book list on changes to reflect changes on the server
- Centralized application state using context (BooksContext)


## Technologies Used

- React.js
- JSON-server for API server
- Axios for HTTP requests
- Picsum API for images
- HTML/CSS for styling

## Installation

To run the app locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/SolimanIslam/Books-app.git
2. Navigate to the project directory:
   ```
    cd books-app

3. Install dependencies:
   ```
    npm install

4. Start the development server:
   ```
   npm start
## Usage

1. Open the app in your web browser.
2. Add a book title in the input field.
3. Click on the "Add Book" button to create a card for the book with a random image from picsum.com.
4. You can edit the book details by clicking on the "Edit" icon on the book card.
5. To delete a book, click on the "Delete" icon on the book card.



![image](https://github.com/SolimanIslam/Books-app/assets/136899518/f6d5913c-3ab0-4208-bd1d-bcded7a7d277)

https://github.com/SolimanIslam/Books-app/assets/136899518/d2167a35-80c3-43e0-9001-f8fffc463c23





