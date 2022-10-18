import { Background, Container, List, Book } from './styles';
import React, { useContext } from 'react';
import Menu from '../../components/Menu';
import { BooksContext } from '../../contexts/BooksContext';

const ListBooks = () => {
  const { books } = useContext(BooksContext);

  return (
    <>
      <Background>
        <Menu />
        <Container>
          <h1>List all books</h1>
          {books ? (
            <List>
              {books.map((book) => (
                <Book key={book.isbn}>
                  <div>
                    <h2>ISBN:</h2>
                    <p>{book.isbn}</p>
                  </div>

                  <div>
                    <h2>Name:</h2>
                    <p>{book.name}</p>
                  </div>

                  <div>
                    <h2>Author:</h2>
                    <p>{book.author}</p>
                  </div>

                  <div>
                    <h2>Pages:</h2>
                    <p>{book.pages}</p>
                  </div>

                  <div>
                    <h2>Copies:</h2>
                    <p>{book.copies}</p>
                  </div>
                </Book>
              ))}
            </List>
          ) : null}
        </Container>
      </Background>
    </>
  );
};

export default ListBooks;
