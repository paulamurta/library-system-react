import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import React from 'react';
import ListBooks from '../pages/ListBooks';
import SearchBooks from '../pages/SearchBook';
import PostBook from '../pages/PostBook';
import { Toaster } from 'react-hot-toast';

const RoutesMain = () => {
  return (
    <>
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: '#343B41',
              color: '#F8F9FA',
              border: '3px solid #3FE864',
            },
          },
          error: {
            style: {
              background: '#343B41',
              color: '#F8F9FA',
              border: '3px solid #E83F5B',
            },
          },
        }}
        position="top-right"
        reverseOrder={false}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<ListBooks />} />
        <Route path="/search" element={<SearchBooks />} />
        <Route path="/post" element={<PostBook />} />
      </Routes>
    </>
  );
};

export default RoutesMain;
