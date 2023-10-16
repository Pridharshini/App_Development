import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Assets/Home.css';
import Footer from './Footer';

function Home() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const hideDropdown = () => {
    setShowDropdown(false);
  };

  return (
    <div>
      <header>
        <nav className="navbar">
          <h2 className="logo">
            <a href="#">SKEDULO</a>
          </h2>
          <input type="checkbox" id="menu-toggler" />
          <label htmlFor="menu-toggler" id="hamburger-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              width="24px"
              height="24px"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M3 18h18v-2H3v2zm0-5h18V11H3v2zm0-7v2h18V6H3z" />
            </svg>
          </label>
          <ul className="all-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li className="login-drop">
              <a onClick={toggleDropdown}>Login</a>
              {showDropdown && (
                <div className="dropdown" onClick={hideDropdown}>
                  <Link to="/login">Admin</Link>
                  <br></br>
                  <Link to="/login">Employee</Link>
                </div>
              )}
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </nav>
      </header>

      <section className="homepage" id="home">
        <div className="content">
          <div className="text">
            <h1>Staff Scheduling</h1>
            <p>
              Simplify workforce management with our Skedulo-staff scheduling application.<br></br>
              Streamline your scheduling processes and enhance productivity.
            </p>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <h2>About Us</h2>
        <p>Learn about our team and how we manage staff scheduling.</p>
        <div className="row company-info">
          <h3>Our Team</h3>
          <ul>
            <li>Priya - Staff Scheduling Manager</li>
            <li>Sasi- Assistant Staff Scheduling Manager</li>
            <li>Mansi - Scheduling Specialist</li>
            <li>Vaishali - Operations Manager</li>
          </ul>
        </div>
        <div className="row mission-vision">
          <h3>Our Mission</h3>
          <p>
            At Camping Gear Experts, our mission is to ensure effective staff scheduling for seamless operations.
            We work diligently to maintain a well-organized and productive team to provide exceptional camping experiences.
          </p>
          <h3>Our Vision</h3>
          <p>
            Our vision is to be a leader in staff scheduling for camping enthusiasts.
            We aim to optimize staff resources, improve efficiency, and deliver top-notch camping experiences through strategic scheduling.
          </p>
        </div>
      </section>

      <section className="contact" id="contact">
        <h2>Contact Us</h2>
        <div className="row">
          <div className="col information">
            <div className="contact-details">
              <p><i className="fas fa-map-marker-alt"></i> 123 Kovaipudur, Coimbatore - 638312</p>
              <p><i className="fas fa-envelope"></i> info@skedulo.com</p>
              <p><i className="fas fa-phone"></i> (123) 9944-0067</p>
            </div>
          </div>
          <div className="col form">
            <form>
              <input type="text" placeholder="Name*" required />
              <input type="email" placeholder="Email*" required />
              <textarea placeholder="Message*" required></textarea>
              <button id="submit" type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
