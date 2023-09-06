import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchCriteria, setSearchCriteria] = useState('title'); // Default search criteria

  useEffect(() => {
    fetchBooks();
  }, [searchCriteria, searchQuery]); // Re-run fetchBooks when searchCriteria or searchQuery changes

  const params = useParams();
  let userId = params.user;

  const fetchBooks = () => {
    axios
      .get(`http://localhost:4000/api/books?${searchCriteria}=${searchQuery}`)
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const searchHandler = (e) => {
    e.preventDefault();
    fetchBooks();
  };

  return (
    <>
      <Header userId={userId} />
      <div className="container mt-5">
        <form className="d-flex" onSubmit={(e) => searchHandler(e)}>
          <select
            value={searchCriteria}
            onChange={(e) => setSearchCriteria(e.target.value)}
            className="form-select"
          >
            <option value="title">Title</option>
            <option value="author">Author</option>
            <option value="published_year">Published Year</option>
            <option value="genre">Genre</option>
          </select>
          <input
            type="search"
            name=""
            id=""
            placeholder={`Search by ${searchCriteria}..`}
            className="form-control"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className='btn btn-outline-dark'>Search</button> 
        </form>
        <br />
        {!books.length ? (
          <p>No books found!</p>
        ) : (
          <div className="row">
            {books.map((book) => (
              <div key={book.id} className="col-md-4">
                <div className="card">
                  <img src={book.image} alt="Book cover" className="card-img-top" />
                  <div className="card-body">
                    <h3 className="card-title">{book.title}</h3>
                    <p className="card-text">Author: {book.author}</p>
                    <p className="card-text">Genre: {book.genre}</p>
                    <p className="card-text">Publication Year: {book.published_year}</p>
                    <Link to={{ pathname: `/details/${userId}/${book._id}` }} className="btn bg-dark text-white">
                      More info
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;
