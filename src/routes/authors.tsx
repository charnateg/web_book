import { useEffect, useState } from 'react';
import { get_authors } from '../api';
import { Author } from '../types';

export default function Authors() {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadAuthors() {
      try {
        const { authors, total } = await get_authors(page, 10);
        setAuthors(authors);
        setTotal(total);
      } catch (err: any) {
        setError(err.message);
      }
    }
    loadAuthors();
  }, [page]);

  return (
    <div>
      <h1>Authors</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {authors.map((author) => (
          <li key={author.id}>
            {author.firstname} {author.lastname}
          </li>
        ))}
      </ul>
      <div>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button>
        <span>Page {page}</span>
        <button disabled={page * 10 >= total} onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
}