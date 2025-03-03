import react from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
    <header className="header">
      <h1 className="title">TravelCo</h1>
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
      <h2 className="headline">Explore the World with Us</h2>
      <p className="description">Discover breathtaking destinations and unique experiences tailored just for you.</p>
      <button className="cta-button">Get Started</button>
    </main>

    <footer className="footer">
      &copy; {new Date().getFullYear()} TravelCo. All rights reserved.
    </footer>
  </div>
      
    </div>
  );
}

export default App;
