# Book Management RESTful API

This is a Node.js RESTful API for managing books. It provides CRUD (Create, Read, Update, Delete) operations to manage book data.

## API Endpoints and Usage

### 1. Create a New Book

- **Endpoint**: `POST /api/books`
- **Description**: Add a new book to the database.
- **Request Body**:
  ```json
  {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "summary": "A story of decadence, idealism, and excess set in the Roaring Twenties."
  }
  ```
- **Response**: Returns the newly added book with a book ID.

### 2. List All Books

- **Endpoint**: `GET /api/books`
- **Description**: Retrieve a list of all books in the database.
- **Response**: Returns an array of book objects.

### 3. Get Book by ID

- **Endpoint**: `GET /api/books/:id`
- **Description**: Retrieve details of a specific book by its ID.
- **Response**: Returns the book with the specified ID.

### 4. Update Book

- **Endpoint**: `PUT /api/books/:id`
- **Description**: Update the details of a specific book by its ID.
- **Request Body**:
  ```json
  {
    "title": "New Title",
    "author": "New Author",
    "summary": "Updated summary."
  }
  ```
- **Response**: Returns the updated book.

### 5. Delete Book

- **Endpoint**: `DELETE /api/books/:id`
- **Description**: Delete a book by its ID.
- **Response**: Returns a success message if the book was deleted, or an error message if the book was not found.

## Local Setup

To run this application locally, follow these steps:

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/book-management-api.git
   ```

2. Navigate to the project directory:

   ```bash
   cd book-management-api
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the project root directory and set the MongoDB connection URI:

   ```
   MONGODB=mongodb://localhost:27017/your-database-name
   ```

5. Start the application:

   ```bash
   npm start
   ```

6. The application will run on http://localhost:3000 by default.

## Decisions and Assumptions

- MongoDB is used as the database for storing book data.
- Basic validation is in place to ensure required fields (title, author, and summary) are provided in requests.
- Error handling is included to handle cases where a book is not found or there are database connection issues.
