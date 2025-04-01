import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Root from './routes/root.tsx';
import Home from './routes/home.tsx';
import Authors from './routes/authors.tsx';
import Books from './routes/books.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="authors" element={<Authors />} />
          <Route path="books" element={<Books />} />
        </Route>
      </Routes>
    </BrowserRouter>;
  </StrictMode>,
);