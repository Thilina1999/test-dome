import React, { useState, useRef, createContext } from "react";
import CharacterAttributes from "./CharacterAttributes"; 
import TodoList from "./TodoList";
import ImageGallery from "./ImageGallery";
import Username from "./UserName";
import Product from "./Product";
import FactoryStatus from "./FactoryStatus";

const items = [ { text: 'Buy grocery', done: true },
  { text: 'Play guitar', done: false },
  { text: 'Romantic dinner', done: false }
];
const links = ["https://bit.ly/3xXPxPR", "https://bit.ly/4de3sQr"];

function App() {

  return (
    <FactoryStatus />
  );
}

export default App;
