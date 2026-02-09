import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaSearch, FaUser, FaHeart, FaShoppingBag } from 'react-icons/fa';

import './App.css';

import Home from './pages/Home';
import DisGiyim from './pages/DisGiyim';
import UstGiyim from './pages/UstGiyim';
import AltGiyim from './pages/AltGiyim';
import Pijama from './pages/Pijama';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="header">
          <h1 className="logo">SudillA</h1>
          <nav className="menu">
            <Link to="/">ANA SAYFA</Link>
            <Link to="/dis-giyim">DIŞ GİYİM</Link>
            <Link to="/ust-giyim">ÜST GİYİM</Link>
            <Link to="/alt-giyim">ALT GİYİM</Link>
            <Link to="/pijama">PİJAMA</Link>
          </nav>
          <div className="icons">
            <FaSearch />
            <FaUser />
            <FaHeart />
            <FaShoppingBag />
          </div>
        </header>

        {/* Route'a göre içerik */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dis-giyim" element={<DisGiyim />} />
          <Route path="/ust-giyim" element={<UstGiyim />} />
          <Route path="/alt-giyim" element={<AltGiyim />} />
          <Route path="/pijama" element={<Pijama />} />
        </Routes>

        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section about">
              <h1 className="logo">SudillA</h1>
            </div>
            <div className="footer-section social">
              <div className="social-icons">
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="mailto:info@sudilla.com"><i className="fas fa-envelope"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
                <a href="#"><i className="fab fa-spotify"></i></a>
                <a href="#"><i className="fab fa-pinterest-p"></i></a>
                <a href="#"><i className="fab fa-tiktok"></i></a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 SUDILLAA. Tüm hakları saklıdır.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;











