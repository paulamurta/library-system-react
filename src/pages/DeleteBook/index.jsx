import { Background, Form } from "./styles";
import React from "react";
import Menu from "../../components/Menu";

const DeleteBooks = () => {
  return (
    <>
      <Background>
        <Menu />
        <Form>
          <h1>Delete books</h1>
        </Form>
      </Background>
    </>
  );
};

export default DeleteBooks;
