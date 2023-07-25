import { useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import { getUsername } from 'redux/auth/authSelectors';
import { useDispatch } from 'react-redux';
import { logOutUser } from 'redux/auth/authOperations';
import { Button } from '@chakra-ui/react';

export const UserMenu = () => {
  const name = useSelector(getUsername);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logOutUser());
  };

  return (
    <div className={css.userContainer}>
      <p>Hello, {name}</p>
      <Button
        className={css.userBtn}
        colorScheme="teal"
        variant="solid"
        size={'sm'}
        onClick={handleClick}
      >
        Logout
      </Button>
    </div>
  );
};
