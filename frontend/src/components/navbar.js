import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <div>
      <div>
        <nav className='navbar navbar-expand-md bg-dark navbar-dark container-fluid'>
          <Link to="/" className="navbar-brand">
            <img src="https://thebulletin.org/wp-content/uploads/2021/01/845px-Atomwaffen_Division_logo.svg.png" alt="Atomwaffen Division logo" style={{ maxWidth: '100px', maxHeight: '50px' }} />
          </Link>
          <ul className='navbar-nav me-auto' >
            <li className='nav-item'>
              <Link to="/" className='nav-link'>Homepage</Link>
            </li>
            <li className='nav-item'>
              <Link to="/about" className='nav-link'>About</Link>
            </li>
            <li className='nav-item'>
              <Link to="/course" className='nav-link'>Books</Link>
            </li>
            <li className='nav-item'>
              <Link to="/library" className='nav-link'>Your Library</Link>
            </li>
          </ul>
          <Link to="/login" className='btn btn-info mx-1'>Login</Link>
          <Link to="/signup" className='btn btn-info mx-1'>SignUp</Link>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
