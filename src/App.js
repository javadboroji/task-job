import React from 'react';
import './App.css';
import Login from './components/Login-page/Login';
import Main from './components/Main-page/Main';
import Header from './components/Header/Header'
import { Routes, Route } from "react-router-dom";
import Register from './components/Login-page/Register';
import Filter from './components/Main-page/Filter/Filter';


function App() {
  return (
    <div >
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>

    </div>
  );
}

export default App;
