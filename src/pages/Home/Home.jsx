import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSelectors';

const Home = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      <h1>Your phone book</h1>
      {isLoggedIn ? (
        <h2>Go to contacts to view your contact list</h2>
      ) : (
        <h2>Register or log in to view your contact list</h2>
      )}
    </>
  );
};

export default Home;
