import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export const Navigation = () => {
  return (
    <>
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
    </>
  );
};
