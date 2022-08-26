import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Mainpage from './pages/MainPage';
import Signup from './pages/Signup';
import Signin from './pages/Signin';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        {/* <Route path="/posts" element={<Posts />} /> */}
      </Routes>
    </>
  );
}

export default App;
