import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import { Button } from '@chakra-ui/react';

export const AuthNav = () => {
  return (
    <ul className={css.navigation}>
      <li className={css.nav_link}>
        <NavLink to="/register">
          <Button colorScheme="teal" variant="solid">
            Register
          </Button>
        </NavLink>
      </li>
      <li className={css.nav_link}>
        <NavLink to="/login">
          <Button colorScheme="teal" variant="solid">
            Login
          </Button>
        </NavLink>
      </li>
    </ul>
  );
};
