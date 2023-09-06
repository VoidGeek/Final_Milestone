<<<<<<< HEAD
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css"; // Import Font Awesome CSS

const Footer = () => {
  const plainTextLinkStyle = {
    color: "inherit", // Use the default text color
    textDecoration: "none", // Remove underline
    cursor: "pointer", // Change cursor on hover
  };

  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h1>BookHaven</h1>
            <p>
              Your one-stop destination for discovering, exploring, and contributing to our vast collection of books.
            </p>
          </div>
          <div className="col-lg-4">
            <h5>Explore</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" style={plainTextLinkStyle}>
                  <i className="fa fa-home"></i> Home
                </a>
              </li>
              <li>
                <a href="/books" style={plainTextLinkStyle}>
                  <i className="fa fa-book"></i> Books
                </a>
              </li>
              <li>
                <a href="/about" style={plainTextLinkStyle}>
                  <i className="fa fa-info-circle"></i> About Us
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h5>Contribute</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://github.com/VoidGeek/Final_Milestone/tree/master"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={plainTextLinkStyle}
                >
                  <i className="fa fa-github"></i> GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 py-2">
        &copy; {new Date().getFullYear()} LibraryHub. All Rights Reserved.
=======
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="sticky-bottom bg-gray p-1" style={{ backdropFilter: 'blur(2px)' }}>
      <hr className="bg-dark" />
      <div className="d-flex justify-content-between align-items-center container">
        <div>&copy; 2023 Library Book, Inc</div>
        <div>
          <h3 className="h5">Library Book</h3>
        </div>
        <div>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-link text-primary"
          >
            <FontAwesomeIcon icon={faBookOpen} size="2x" />
          </a>
        </div>
>>>>>>> c8e2a42e6738c88a1b9fcebf8d5b0a08dc69efb0
      </div>
    </footer>
  );
};

export default Footer;
