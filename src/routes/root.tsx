import { NavLink, Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <>
      <header>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/authors">Authors</NavLink>
            <NavLink to="/books">Books</NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}