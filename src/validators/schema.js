import * as yup from 'yup';

const schema = yup.object().shape({
  isbn: yup.string().required('ISBN required'),
  name: yup.string().required('Name required'),
  author: yup.string().required('Name required'),
  pages: yup.string().required('Name required'),
  copies: yup.string().required('Name required'),
});

export default schema;
