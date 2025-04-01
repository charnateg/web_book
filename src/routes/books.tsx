import { useEffect, useState } from 'react';
import { get_books } from '../api';
import { Book } from '../types';

export default function Books() {
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBooks() {
      setLoading(true);
      try {
        const books = await get_books();
        setBooks(books);
        setError('');
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadBooks();
  }, []);

  return (
    <div>
      <h1>Books</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author?.firstname} {book.author?.lastname}
          </li>
        ))}
      </ul>
    </div>
  );
}