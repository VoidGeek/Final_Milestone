import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';

const EditBook = ({ book, onUpdateBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [publicationDate, setPublicationDate] = useState('');
  const [coverImage, setCoverImage] = useState('');

  useEffect(() => {
    setTitle(book.title);
    setAuthor(book.author);
    setGenre(book.genre);
    setPublicationDate(book.publicationDate);
    setCoverImage(book.coverImage);
  }, [book]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedBook = {
      id: book.id,
      title,
      author,
      genre,
      publicationDate,
      coverImage,
    };
    onUpdateBook(updatedBook);
  };

  return (
    <div>
      <h2>Edit Book</h2>
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
        <Button variant="primary" type="submit">Update Book</Button>
      </Form>
    </div>
  );
};

export default EditBook;
