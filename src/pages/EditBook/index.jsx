import { Background, Form } from "./styles";
import React from "react";
import Menu from "../../components/Menu";

const EditBooks = () => {
  return (
    <>
      <Background>
        <Menu />
        <Form>
          <h1>Edit books</h1>
        </Form>
      </Background>
    </>
  );
};

export default EditBooks;
