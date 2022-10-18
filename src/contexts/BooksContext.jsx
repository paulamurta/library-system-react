import { createContext, useState } from "react";
import { api } from "../api/api";
import React from "react";

export const BooksContext = createContext({});

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  function postBook(data) {
    api
      .post("/books", data)
      .then((res) => {
        setBooks(...books, data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function listBooks() {
    api
      .get("/books")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function listBookByIsbn(isbn) {
    api
      .get(`/books/${isbn}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function deleteBook(isbn) {
    api
      .delete(`/books/${isbn}`)
      .then((res) => {
        const newBooks = books.filter((book) => book.isbn !== isbn);
        setBooks(newBooks);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function updateBook(data) {
    api
      .put(`books/${data.isbn}`)
      .then((res) => {
        const editedBooks = books.map((book) => {
          if (book.isbn === res.data.isbn) {
            return res.data;
          } else {
            return book;
          }
        });
        setBooks(editedBooks);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <BooksContext.Provider
      value={{
        books,
        setBooks,
        listBooks,
        listBookByIsbn,
        postBook,
        updateBook,
        deleteBook,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};
