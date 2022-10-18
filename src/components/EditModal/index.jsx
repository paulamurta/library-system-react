import { Container, Content } from './styles';
import React from 'react';
import { useContext } from 'react';
import { BooksContext } from '../../contexts/BooksContext';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import schema from '../../validators/schema';
import { motion } from 'framer-motion/dist/framer-motion';
import { AiFillCloseCircle } from 'react-icons/ai';

const EditModal = () => {
  const { showModal, setShowModal, updateBook } = useContext(BooksContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Container>
        <Content>
          <div className="top">
            <div className="button">
              <button onClick={() => setShowModal(!showModal)}>
                <AiFillCloseCircle />
              </button>
            </div>

            <h1>Edit book</h1>
          </div>

          <form noValidate={true} onSubmit={handleSubmit(updateBook)}>
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

            <section>
              <button type="submit">Edit Book</button>
            </section>
          </form>
        </Content>
      </Container>
    </motion.div>
  );
};

export default EditModal;
