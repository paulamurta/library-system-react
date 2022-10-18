import { Background, Form } from "./styles";
import React from "react";
import Menu from "../../components/Menu";

const ListBooks = () => {
  return (
    <>
      <Background>
        <Menu />
        <Form>
          <h1>List books</h1>
        </Form>
      </Background>
    </>
  );
};

export default ListBooks;
