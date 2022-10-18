import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Picture } from './styles';

const Menu = () => {
  const navigate = useNavigate();
  return (
    <Picture>
      <div>
        <button
          className="homeBtn"
          onClick={() => {
            navigate('/');
          }}
        >
          Home
        </button>
        <h1>Books database</h1>
      </div>

      <nav>
        <button
          className="navBtn"
          onClick={() => {
            navigate('/list');
          }}
        >
          List all books
        </button>
        <button
          className="navBtn"
          onClick={() => {
            navigate('/search');
          }}
        >
          Search by ISBN
        </button>
        <button
          className="navBtn"
          onClick={() => {
            navigate('/post');
          }}
        >
          Post book
        </button>
      </nav>
    </Picture>
  );
};

export default Menu;
