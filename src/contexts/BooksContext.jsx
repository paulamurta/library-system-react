import { createContext, useEffect, useState } from 'react';
import { api } from '../api/api';
import React from 'react';
import toast from 'react-hot-toast';

export const BooksContext = createContext({});

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [foundBook, setFoundBook] = useState({});
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const { data } = await api.get('/books');
        setBooks(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchBooks();
  }, []);

  function postBook(data) {
    api
      .post('/books', data)
      .then((res) => {
        setBooks(...books, data);
        toast.success('Book added to database!');
      })
      .catch((err) => {
        toast.error('Something went wrong!');
        console.log(err);
      });
  }

  function deleteBook(isbn) {
    api
      .delete(`/books/${isbn}`)
      .then((res) => {
        toast.success('Book deleted from database!');
        const newBooks = books.filter((book) => book.isbn !== isbn);
        setBooks(newBooks);
      })
      .catch((err) => {
        toast.error('Something went wrong!');
        console.log(err);
      });
  }

  function updateBook(data) {
    api
      .patch(`books/${data.isbn}`, data)
      .then((res) => {
        const editedBooks = books.map((book) => {
          if (book.isbn === data.isbn) {
            return res.data;
          } else {
            return book;
          }
        });
        console.log(data);
        toast.success('Book updated!');
        setShowModal(false);
        setBooks(editedBooks);
      })
      .catch((err) => {
        console.log(data);
        toast.error('Something went wrong!');
        console.error(err);
      });
  }

  return (
    <BooksContext.Provider
      value={{
        books,
        setBooks,
        foundBook,
        setFoundBook,
        search,
        setSearch,
        showModal,
        setShowModal,
        postBook,
        updateBook,
        deleteBook,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};
