import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Home from './Home';
import User from './components/user/Login';
import Regi from './components/user/Register';
import Herbs from './components/menu/Herbs';
import ColdPress from './components/menu/ColdPress';
import Sandwich from './components/menu/Sandwich';
import Healthy from './components/menu/Healthy';
import Fruit from './components/menu/Fruits';
import Mocktails from './components/menu/Mocktails';
import Teacoop from './components/menu/TeaCoop';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<User />} />
        <Route path='/Register' element={<Regi />} />
        <Route path='/Healthy' element={<Healthy/>} />
        <Route path='/Fruit' element={<Fruit/>} />
        <Route path='/mocktails' element={<Mocktails/>} />
        <Route path='/teacoop' element={<Teacoop/>} />
        <Route path='/herbs' element={<Herbs />} />
        <Route path='/coldpress' element={<ColdPress />} />
        <Route path='/sandwich' element={<Sandwich />} />
        <Route path='https://www.facebook.com/' />
        <Route path='https://www.instagram.com/' />
        <Route path='https://www.linkedin.com/feed/' />
        <Route path='https://www.youtube.com/' />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
