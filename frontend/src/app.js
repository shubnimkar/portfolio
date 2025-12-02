import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import { Toaster } from './components/ui/toaster';
import './app.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;