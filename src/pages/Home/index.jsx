import { Background, Body } from "./styles";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion/dist/framer-motion";
import React from "react";

const Home = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2.5 }}
    >
      <Background>
        <Body>
          <div>
            <nav>
              <button className="navBtn">Support</button>
              <button className="navBtn">FAQ</button>
              <button className="navBtn">About</button>
            </nav>
            <h1>Official Library System</h1>
            <h2>Search for books from our catalogue</h2>
          </div>
          <button
            className="enterBtn"
            onClick={() => {
              navigate("/list");
            }}
          >
            Enter
          </button>
        </Body>
      </Background>
    </motion.div>
  );
};

export default Home;
