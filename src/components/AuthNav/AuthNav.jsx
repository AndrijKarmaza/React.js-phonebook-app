import { NavLink } from 'react-router-dom';

export const AuthNav = ({ css }) => {
  return (
    <ul className={css.navigation}>
      <li>
        <NavLink to="/register" className={css.nav_link}>
          Register
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" className={css.nav_link}>
          Login
        </NavLink>
      </li>
    </ul>
  );
};
