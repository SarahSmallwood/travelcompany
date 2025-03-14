import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import './App.css';
import ImageCarousel from './components/ImageCarousel';
import TravelOptionsPage from './components/TravelOptions/TravelOptionsPage';

function App() {
  return (
    <div className="App">
      <div className="top-bar">
        <FaPhoneAlt className="phone-icon" />
        <p>+1 (123) 456-7890</p>
      </div>
      <div className="container">
    <header className="header">
      <h1 className="title">Above and Abroad Travel</h1>
      <nav>
        <ul className="nav-list">
          <li><a href="#" className="nav-link">Home</a></li>
          <li><a href="#" className="nav-link">Destinations</a></li>
          <li><a href="#" className="nav-link">About Us</a></li>
          <li><a href="#" className="nav-link">Contact</a></li>
        </ul>
      </nav>
    </header>

    <main className="main">
      <h2 className="headline">Choose Your Next Destination and Explore the World with Us</h2>
      <ImageCarousel/>
      <p className="description">Discover breathtaking destinations and unique experiences tailored just for you.</p>
      <button className="cta-button">Get Started</button>
    </main>
    <TravelOptionsPage/>

    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Above and Abroad Travel. All rights reserved.</p>
      <div className="social-icons">
          <a href="#" className="social-icon" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" className="social-icon" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" className="social-icon" aria-label="Twitter">
            <FaTwitter />
          </a>
        </div>

      
    </footer>
  </div>
      
    </div>
  );
}

export default App;
