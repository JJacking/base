/* App.js */
import {Route, Routes} from "react-router-dom";
import UserInfo from "./routes/UserInfo";
import BoardList from "./routes/BoardList";
import Home from "./routes/Home";
import React from "react";
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/board" element={<BoardList/>}/>
      <Route path="/user" element={<UserInfo/>}/>
    </Routes>
  );
}

export default App;