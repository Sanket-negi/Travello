import React from 'react';
import './App.css'; // Import custom CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Destinations />
      <Hotels />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

// Header Component
function Header() {
  return (
    <header>
      <h1>Welcome to TripEasily</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#destinations">Destinations</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="search-bar">
          <input type="text" id="search" placeholder="Search destinations..." />
          <button className="btn-light">Search</button>
        </div>
      </nav>
    </header>
  );
}

// Hero Section Component
function Hero() {
  return (
    <section id="home">
      <div className="hero">
        <h2>Explore the World</h2>
        <p>Discover new adventures and create lasting memories.</p>
        <a href="#destinations" className="btn">Explore Destinations</a>
      </div>
    </section>
  );
}

// Destinations Component
function Destinations() {
  return (
    <section id="destinations">
      <h2>International Packages</h2>
      <div className="destination-cards">
        <div className="card">
          <img className="card-img-top" src="/paris.jpg" alt="Paris" />
          <div className="card-body">
            <h3 className="card-title">Paris, France</h3>
            <p className="card-text">Experience the romance of the City of Light.</p>
            <a href="#" className="btn btn-primary">Know More</a>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src="https://tse1.mm.bing.net/th?id=OIP.hVTSvZ2lbaKLpxdo93wT6gHaD3&pid=Api&P=0&h=220" alt="Tokyo" />
          <div className="card-body">
            <h3 className="card-title">Tokyo, Japan</h3>
            <p className="card-text">Discover the vibrant culture and cuisine of Tokyo.</p>
            <a href="#" className="btn btn-primary">Know More</a>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src="/rio-de-janeiro.jpg" alt="Rio de Janeiro" />
          <div className="card-body">
            <h3 className="card-title">Rio de Janeiro, Brazil</h3>
            <p className="card-text">Enjoy the beaches and vibrant atmosphere of Rio.</p>
            <a href="#" className="btn btn-primary">Know More</a>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src="/rome.jpg" alt="Rome" />
          <div className="card-body">
            <h3 className="card-title">Rome, Italy</h3>
            <p className="card-text">Discover the ancient history and rich culture of Rome.</p>
            <a href="#" className="btn btn-primary">Know More</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Hotels Component
function Hotels() {
  return (
    <section id="hotels">
      <h2>Your Comfort, Our Priority</h2>
      <div className="hotel-cards">
        <div className="card">
          <img className="card-img-top" src="/Imperial.jpg" alt="The Imperial" />
          <div className="card-body">
            <h3>The Imperial</h3>
            <p>Experience the Royalness</p>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src="/Shangri-la.jpg" alt="Shangri-la" />
          <div className="card-body">
            <h3>Hotel Shangri-la</h3>
            <p>Feel the Luxury</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// About Section Component
function About() {
  return (
    <section id="about">
      <h2>About Us</h2>
      <p>We are passionate about travel and helping you plan your dream vacations.</p>
    </section>
  );
}

// Contact Section Component
function Contact() {
  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <p>If you have any questions or need assistance, feel free to reach out to us.</p>
      <address>
        Email: <a href="mailto:info@travelexplorer.com">info@travelexplorer.com</a><br />
        Phone: +91-82954899**
      </address>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer>
      <p>&copy; 2023 Travel Explorer</p>
    </footer>
  );
}

export default App;
