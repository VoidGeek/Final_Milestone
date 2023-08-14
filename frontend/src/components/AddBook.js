import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './AddBlock.css';

const AddBook = ({ onAddBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [publicationDate, setPublicationDate] = useState('');
  const [coverImage, setCoverImage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = {
      title,
      author,
      genre,
      publicationDate,
      coverImage,
    };
    onAddBook(newBook);
    // Reset form fields
    setTitle('');
    setAuthor('');
    setGenre('');
    setPublicationDate('');
    setCoverImage('');
  };

  return (
    <div className="  justify-content-center border border-5 p-4 ">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="author">
          <Form.Label>Author</Form.Label>
          <Form.Control type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="genre">
          <Form.Label>Genre</Form.Label>
          <Form.Control type="text" value={genre} onChange={(e) => setGenre(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="publicationDate">
          <Form.Label>Publication Date</Form.Label>
          <Form.Control type="date" value={publicationDate} onChange={(e) => setPublicationDate(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="coverImage">
          <Form.Label>Cover Image URL</Form.Label>
          <Form.Control type="text" value={coverImage} onChange={(e) => setCoverImage(e.target.value)} required />
        </Form.Group>
        <Button className="mt-3" variant="primary" type="submit">Add Book</Button>
      </Form>
    </div>
  );
};

export default AddBook;
