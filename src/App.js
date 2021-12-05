import React from "react";
import AppRouter from "./components/AppRouter";
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/UI/navbar/Navbar";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
