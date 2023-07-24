import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { useDispatch } from 'react-redux';
import css from './LogInForm.module.css';
import { logInUser } from 'redux/auth/authOperations';

export const LogInForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logInUser(values));
    console.log(values);
    resetForm();
  };

  const schema = object({
    email: string().email().required(),
    password: string().min(7, ' Too Short! Minimum 6 symbol').required(),
  });

  return (
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
  );
};
