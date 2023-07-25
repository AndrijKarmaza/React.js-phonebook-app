import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import { Button } from '@chakra-ui/react';

export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      <ul className={css.navigation}>
        <li className={css.nav_link}>
          <NavLink to="/" end>
            <Button colorScheme="teal" variant="solid">
              Home
            </Button>
          </NavLink>
        </li>
        {isLoggedIn && (
          <li className={css.nav_link}>
            <NavLink to="/contacts">
              <Button colorScheme="teal" variant="solid">
                Contacts
              </Button>
            </NavLink>
          </li>
        )}
      </ul>
    </>
  );
};
