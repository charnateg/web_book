import { AuthorCreationData } from "./types";
import { Book } from "./types";

const apiBasename = 'http://localhost:3000';

export async function get_authors(page = 1, pageSize = 10) {
  const res = await fetch(`${apiBasename}/authors?skip=${(page - 1) * pageSize}&take=${pageSize}`);
  if (!res.ok) {
    const msg = await res.text();
    throw new Error(msg);
  }
  const authors = await res.json();
  const total = parseInt(res.headers.get('X-Total-Count') || '0', 10);
  return { authors, total };
}

// Ajoutez des fonctions similaires pour add_author et remove_author
export async function add_author(data: AuthorCreationData) {
  const res = await fetch(`${apiBasename}/authors`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const msg = await res.text();
    throw new Error(msg);
  }
}

export async function remove_author(id: number) {
  const res = await fetch(`${apiBasename}/authors/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) {
    const msg = await res.text();
    throw new Error(msg);
  }
}

export async function get_books() {
  const res = await fetch(`${apiBasename}/books`);
  if (!res.ok) {
    const msg = await res.text();
    throw new Error(msg);
  }
  const books: Book[] = await res.json();
  return books;
}