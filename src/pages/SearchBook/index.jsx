import { Background, Form } from "./styles";
import React from "react";
import Menu from "../../components/Menu";

const SearchBooks = () => {
  return (
    <>
      <Background>
        <Menu />
        <Form>
          <h1>Search books</h1>
        </Form>
      </Background>
    </>
  );
};

export default SearchBooks;
