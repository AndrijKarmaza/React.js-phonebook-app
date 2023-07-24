import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import css from './RegisterForm.module.css';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/authOperations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(registerUser(values));
    console.log(values);
    resetForm();
  };

  const schema = object({
    name: string().required(),
    email: string().email().required(),
    password: string().min(7, ' Too Short! Minimum 7 symbol').required(),
  });

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form>
        <label className={css.label}>
          Name
          <ErrorMessage component="div" name="name" />
          <Field type="text" name="name" className={css.input}></Field>
        </label>
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
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};