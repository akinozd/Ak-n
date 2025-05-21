import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SellPage from './pages/SellPage';
import RetrievePage from './pages/RetrievePage';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sell" element={<SellPage />} />
          <Route path="/retrieve" element={<RetrievePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;