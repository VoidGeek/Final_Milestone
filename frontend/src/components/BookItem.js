import React from 'react';
import { Button, Card } from 'react-bootstrap';

const BookItem = ({ book, onEdit, onDelete }) => {
  return (
    <Card className="book-card" style={{ width: '18rem', margin: '20px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
      <Card.Img variant="top" src={book.coverImage} alt={book.title} style={{ maxWidth: '100%', maxHeight: '300px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>Author: {book.author}</Card.Text>
        <Card.Text>Genre: {book.genre}</Card.Text>
        <Card.Text>Publication Date: {book.publicationDate}</Card.Text>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="primary" onClick={() => onEdit(book)}>Edit</Button>
          <Button variant="danger" onClick={() => onDelete(book.id)}>Delete</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default BookItem;
