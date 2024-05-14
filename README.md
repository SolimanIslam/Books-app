# Books App v1.2 - Persisted Books

The Books App v1.2 is an updated version of the simple web application built with React.js that allows you to keep track of your books. In this version, the app uses an API server to persistently store the book list using JSON-server and the axios package. The usage of a REST client verified that the JSON-server is working appropriately. Additionally, useEffect is utilized to fetch all the books from the API server once the app starts. The methods on the books array have been refactored to update changes on the JSON server and then update the books array accordingly.

## Features

- Add books with titles
- Display book cards with images from picsum.com
- Edit book details
- Delete books
- Persistently store book list using JSON-server
- Fetch books from API server on app start
- Update book list on changes to reflect changes on the server

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

This version (v1.2) of the app has a branch named "2-persisted-books" to distinguish it from the previous version (v1.0) named "1-unpersisted-books." The v1.0 version also has a branch named "1-unpersisted-books."

![image](https://github.com/SolimanIslam/Books-app/assets/136899518/f6d5913c-3ab0-4208-bd1d-bcded7a7d277)

https://github.com/SolimanIslam/Books-app/assets/136899518/ca1d3b56-06bb-452e-bbd8-7886be41344e


