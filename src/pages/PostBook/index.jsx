import { Background, Form } from "./styles";
import React from "react";
import Menu from "../../components/Menu";

const PostBooks = () => {
  return (
    <>
      <Background>
        <Menu />
        <Form>
          <h1>Post books</h1>
        </Form>
      </Background>
    </>
  );
};

export default PostBooks;
