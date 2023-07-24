import { NavLink } from 'react-router-dom';

export const Navigation = ({ css }) => {
  return (
    <nav>
      <ul className={css.navigation}>
        <li>
          <NavLink to="/" end className={css.nav_link}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacts" className={css.nav_link}>
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
