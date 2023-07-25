import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import css from './LogInForm.module.css';
import { logInUser } from 'redux/auth/authOperations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { getErrorUser, getIsLoadingUser } from 'redux/auth/authSelectors';

export const LogInForm = () => {
  const dispatch = useDispatch();

  const isUserLoading = useSelector(getIsLoadingUser);
  const userError = useSelector(getErrorUser);

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logInUser(values));
    resetForm();
    isUserLoading && Loading.standard('Loading');
  };

  const schema = object({
    email: string().email().required(),
    password: string().min(7, ' Too Short! Minimum 6 symbol').required(),
  });

  return (
    <>
      {userError &&
        Notify.failure(
          'Something went wrong please try to reload page or Register'
        )}
      {!isUserLoading && Loading.remove()}
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form>
          <label className={css.label}>
            Email
            <ErrorMessage component="div" name="email" />
            <Field type="mail" name="email" className={css.input}></Field>
          </label>
          <label className={css.label}>
            Password
            <ErrorMessage component="div" name="password" />
            <Field type="text" name="password" className={css.input}></Field>
          </label>
          <button type="submit">Log in</button>
        </Form>
      </Formik>
    </>
  );
};
