import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ThanksPage from './components/ThanksPage';
import FinalThanksPage from './components/FinalThanksPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/thanks" element={<ThanksPage />} />
      <Route path="/thanks2" element={<FinalThanksPage />} />
    </Routes>
  );
}

export default App;