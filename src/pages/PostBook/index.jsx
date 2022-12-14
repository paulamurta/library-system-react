import { Background, Container, Form, Book } from './styles';
import React from 'react';
import Menu from '../../components/Menu';
import { useContext } from 'react';
import { BooksContext } from '../../contexts/BooksContext';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import schema from '../../validators/schema';

const PostBook = () => {
  const { books, setBooks, postBook } = useContext(BooksContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <>
      <Background>
        <Menu />
        <Container>
          <h1>Post book</h1>
          <Form noValidate={true} onSubmit={handleSubmit(postBook)}>
            <fieldset>
              <label htmlFor="isbn">ISBN:</label>
              <input
                id="isbn"
                type="text"
                placeholder="Type book ISBN"
                {...register('isbn')}
              />
            </fieldset>

            <fieldset>
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                {...register('name')}
              />
            </fieldset>

            <fieldset>
              <label htmlFor="author">Author:</label>
              <input
                id="author"
                type="text"
                placeholder="Author"
                {...register('author')}
              />
            </fieldset>

            <fieldset>
              <label htmlFor="pages">Pages:</label>
              <input
                id="pages"
                type="text"
                placeholder="Number of pages"
                {...register('pages')}
              />
            </fieldset>

            <fieldset>
              <label htmlFor="pages">Copies:</label>
              <input
                id="copies"
                type="text"
                placeholder="Number of copies"
                {...register('copies')}
              />
            </fieldset>

            <button type="submit">Post Book</button>
          </Form>
        </Container>
      </Background>
    </>
  );
};

export default PostBook;
