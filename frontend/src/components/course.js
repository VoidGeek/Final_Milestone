import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

const Library = () => {
  const bookData = [
    {
      id: 1,
      title: 'The Great Gatsby',
      icon: 'fas fa-book fa-3x text-primary',
      author: 'F. Scott Fitzgerald',
      genre: 'Classic Fiction',
      copies: 5,
    },
    {
      id: 2,
      title: 'To Kill a Mockingbird',
      icon: 'fas fa-book fa-3x text-danger',
      author: 'Harper Lee',
      genre: 'Classic Fiction',
      copies: 3,
    },
    {
      id: 3,
      title: '1984',
      icon: 'fas fa-book fa-3x text-success',
      author: 'George Orwell',
      genre: 'Dystopian Fiction',
      copies: 7,
    },
    // Add more book items
  ];

  const [hoveredBook, setHoveredBook] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCriteria, setFilterCriteria] = useState('title'); // Default to searching by title

  const handleBookHover = (id) => {
    setHoveredBook(id);
  };

  const handleBookLeave = () => {
    setHoveredBook(null);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterCriteria(event.target.value);
  };

  const filteredBooks = bookData.filter((book) =>
    book[filterCriteria].toLowerCase().includes(searchQuery.toLowerCase())
  );

 
  const [formData, setFormData] = useState({
    name: '',
    membership: '',
    phoneNumber: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setShowModal(false);
  };

  return (
    <div className="container">
      <h1 className="display-4 text-center my-4">Library Books</h1>
      <div className="row mb-3">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Search books..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <div className="col-md-6">
          <select className="form-control" value={filterCriteria} onChange={handleFilterChange}>
            <option value="title">Title</option>
            <option value="author">Author</option>
            <option value="genre">Genre</option>
          </select>
        </div>
      </div>
      <div className="row">
        {filteredBooks.map((book) => (
          <div
            key={book.id}
            className="col-md-4"
            onMouseEnter={() => handleBookHover(book.id)}
            onMouseLeave={handleBookLeave}
          >
            <div
              className="card mb-4"
              style={{
                marginBottom: '1.5rem',
                cursor: 'pointer',
                transition: 'transform 0.5s',
                transform: hoveredBook === book.id ? 'translateY(-10px)' : 'none',
                backgroundColor: hoveredBook === book.id ? '#f8f9fa' : 'white',
              }}
            >
              <div className="card-body">
                <h5 className="card-title">
                  <i className={book.icon}></i> {book.title}
                </h5>
                {hoveredBook === book.id && (
                  <>
                    <p>Author: {book.author}</p>
                    <p>Genre: {book.genre}</p>
                    <p>Copies Available: {book.copies}</p>
                    <button className="btn btn-primary" onClick={() => setShowModal(true)}>
                      Borrow Book
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Borrow a Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Membership ID:</label>
              <input
                type="text"
                className="form-control"
                name="membership"
                value={formData.membership}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone Number:</label>
              <input
                type="text"
                className="form-control"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <Button variant="primary" type="submit">
              Borrow
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Library;
