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
      </div>
    </footer>
  );
};

export default Footer;
