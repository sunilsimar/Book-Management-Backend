const express = require("express");
const Book = require("../db/db");

const router = express.Router();

//Add a new book route
router.post("/newbook", async (req, res) => {
  const { title, author, summary } = req.body;

  try {
    if (!title || !author || !summary) {
      return res.status(400).json({ message: "Incomplete book data" });
    }

    const book = new Book({ title, author, summary });
    const savedBook = await book.save();
    res.status(201).json({
      message: "New book added successfully",
      book: savedBook,
      bookid: savedBook._id,
    });
  } catch (err) {
    res.status(500).json({ message: "Book not added", error: err });
  }
});

//Update book
router.put("/book/:bookId", async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.bookId, req.body, {
    new: true,
  }); //mongoose function
  if (book) {
    res.json({ message: "Book updated successfully" });
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

//delete book
router.delete("/deletebook/:bookId", async (req, res) => {
  const bookId = req.params.bookId;

  try {
    const deletedBook = await Book.findByIdAndDelete(bookId);

    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.json({ message: "Book deleted successfully" });
  } catch (err) {
    console.error("Error deleting book:", err);
    res
      .status(500)
      .json({ message: "Error deleting book", error: err.message });
  }
});

//get books
router.get("/books", async (req, res) => {
  const books = await Book.find({});
  res.json({ books });
});

//get specific book
router.get("/book/:bookId", async (req, res) => {
  const bookId = req.params.bookId;
  const book = await Book.findById(bookId);
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }
  res.json({ book });
});

module.exports = router;
