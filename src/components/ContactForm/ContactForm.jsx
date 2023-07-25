import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contactsOperations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import css from './ContactForm.module.css';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { Button, Input } from '@chakra-ui/react';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const formSubmit = (values, { resetForm }) => {
    contacts.find(element => element.name === values.name)
      ? Notify.info(`${values.name} is already in contacts.`)
      : dispatch(addContact(values));
    resetForm();
  };

  const schema = object({
    name: string().required(),
    number: string().required(),
  });

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={formSubmit}
      validationSchema={schema}
    >
      <Form className={css.form}>
        <label className={css.label}>
          Name
          <ErrorMessage component="div" name="name" />
          <Field
            as={Input}
            type="text"
            name="name"
            className={css.input}
          ></Field>
        </label>
        <label className={css.label}>
          Number
          <ErrorMessage component="div" name="number" />
          <Field
            as={Input}
            type="tel"
            name="number"
            className={css.input}
          ></Field>
        </label>
        <Button colorScheme="teal" variant="solid" type="submit">
          Add contact
        </Button>
      </Form>
    </Formik>
  );
};
