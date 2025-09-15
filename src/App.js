import { useState,useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./page/MainPage";
import './style.css';


function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage/>} />
      
      </Routes>
    </Router>
  );
 

}

export default App;
