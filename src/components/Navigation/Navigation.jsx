import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSelectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      <ul className={css.navigation}>
        <li>
          <NavLink to="/" end className={css.nav_link}>
            Home
          </NavLink>
        </li>
        {isLoggedIn && (
          <li>
            <NavLink to="/contacts" className={css.nav_link}>
              Contacts
            </NavLink>
          </li>
        )}
      </ul>
    </>
  );
};
