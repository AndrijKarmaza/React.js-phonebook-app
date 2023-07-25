import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { getIsLoadingUser } from 'redux/auth/authSelectors';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { ChakraProvider } from '@chakra-ui/react';

const Home = lazy(() => import('pages/Home/Home'));
const Register = lazy(() => import('pages/Register/Register'));
const Login = lazy(() => import('pages/Login/Login'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const Error = lazy(() => import('pages/Error/Error'));

export const App = () => {
  const dispatch = useDispatch();
  const isUserLoading = useSelector(getIsLoadingUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  !isUserLoading && Loading.remove();

  return isUserLoading ? (
    Loading.standard('Loading')
  ) : (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </ChakraProvider>
  );
};
