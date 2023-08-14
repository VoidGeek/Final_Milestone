import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Home = () => {
  const navigate = useNavigate();

  const handleBrowseBooks = () => {
    navigate('/course');
  };

  return (
    <div>
      <div className="jumbotron text-center">
        <h1 className="display-4">Welcome to Book Library</h1>
        <p className="lead">Explore a vast collection of books in our library</p>
      </div>

      <div>
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="2000"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="2000">
              <img
                src="https://cdn.wallpapersafari.com/31/76/wZq957.jpg"
                className="d-block w-100"
                alt="Slide 1"
              />
              <div className="carousel-caption d-flex justify-content-center align-items-center">
                <div className="text-center text-white">
                  <h2 className="display-4 mb-4">Discover New Books</h2>
                  <p className="lead mb-4">
                    Explore our diverse collection of books across genres.
                  </p>
                  <button
                    onClick={handleBrowseBooks}
                    className="btn btn-primary btn-lg"
                  >
                    Browse Books
                  </button>
                </div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src="https://wallpapercave.com/wp/wp2003321.png"
                className="d-block w-100"
                alt="Slide 2"
              />
              <div className="carousel-caption d-flex justify-content-center align-items-center">
                <div className="text-center text-white">
                  <h2 className="display-4 mb-4">Expand Your Knowledge</h2>
                  <p className="lead mb-4">
                    Dive into the world of literature and learning.
                  </p>
                  <button
                    onClick={handleBrowseBooks}
                    className="btn btn-primary btn-lg"
                  >
                    Browse Books
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="container mt-5">
        <h2 className="text-center mb-4">Featured Books</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src="https://m.media-amazon.com/images/I/716E6dQ4BXL._AC_UF1000,1000_QL80_.jpg"
                className="card-img-top"
                alt="Book Cover 1"
              />
              <div className="card-body">
                <h5 className="card-title">Sapiens: A Brief History of Humankind</h5>
                <p className="card-text">
                A Brief History of Humankind is a book by Yuval Noah Harari, first published in Hebrew in Israel in 2011 based on a series of lectures Harari taught at The Hebrew University of Jerusalem, and in English in 2014.
                </p>
                <button
                  onClick={handleBrowseBooks}
                  className="btn btn-primary"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src="https://www.vishipedia.com/wp-content/uploads/2021/09/the-power-of-habit-book-summary.jpg"
                className="card-img-top"
                alt="Book Cover 2"
              />
              <div className="card-body">
                <h5 className="card-title">The Power of Habit</h5>
                <p className="card-text">
                  The Power of Habit - Why We Do What We Do in Life and Business is a book by Charles Duhigg, a New York Times reporter, published in February 2012 by Random House.
                </p>
                <button
                  onClick={handleBrowseBooks}
                  className="btn btn-primary"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
          {/* Add more featured books */}
        </div>
      </div>
    </div>
  );
};

export default Home;
