import { Background, Container, Form, Book } from './styles';
import React from 'react';
import Menu from '../../components/Menu';
import { useContext } from 'react';
import { BooksContext } from '../../contexts/BooksContext';
import EditModal from '../../components/EditModal/index';

const SearchBooks = () => {
  const {
    books,
    setBooks,
    foundBook,
    setFoundBook,
    search,
    setSearch,
    deleteBook,
    showModal,
    setShowModal,
  } = useContext(BooksContext);

  function handleSearch(event) {
    event.preventDefault();
    const newBook = books.filter((book) => {
      return book.isbn === search;
    });
    setFoundBook(newBook);
  }

  return (
    <>
      {showModal === true ? <EditModal /> : null}
      <Background>
        <Menu />
        <Container>
          <h1>Search books</h1>
          <Form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Type book ISBN"
              onChange={(event) => setSearch(event.target.value)}
              value={search}
            />
            <button type="Submit">Search</button>
          </Form>
          <Book>
            {foundBook.length > 0 ? (
              foundBook.map((book) => (
                <ul key={book.isbn}>
                  <li>
                    <h2>Name:</h2>
                    <p>{book.name}</p>
                  </li>
                  <li>
                    <h2>Author:</h2>
                    <p>{book.author}</p>
                  </li>
                  <li>
                    <h2>Pages:</h2>
                    <p>{book.pages}</p>
                  </li>
                  <li>
                    <h2>Copies:</h2>
                    <p>{book.copies}</p>
                  </li>
                  <div>
                    <button onClick={() => deleteBook(book.isbn)}>
                      Delete
                    </button>
                    <button onClick={() => setShowModal(!showModal)}>
                      Edit
                    </button>
                  </div>
                </ul>
              ))
            ) : (
              <p>Book not found yet.</p>
            )}
          </Book>
        </Container>
      </Background>
    </>
  );
};

export default SearchBooks;
