import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import React from "react";
import ListBooks from "../pages/ListBooks";
import SearchBooks from "../pages/SearchBook";
import EditBooks from "../pages/EditBook";
import DeleteBooks from "../pages/DeleteBook";
import PostBooks from "../pages/PostBook";

const RoutesMain = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<ListBooks />} />
        <Route path="/search" element={<SearchBooks />} />
        <Route path="/edit" element={<EditBooks />} />
        <Route path="/delete" element={<DeleteBooks />} />
        <Route path="/post" element={<PostBooks />} />
      </Routes>
    </>
  );
};

export default RoutesMain;
