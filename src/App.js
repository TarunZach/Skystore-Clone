import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Redirect } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import MainPage from './components/MainPage';


function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<MainPage />} />
          <Route path='/signin' element={<LoginForm />} />
          <Route path='/signup' element={<SignUpForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
