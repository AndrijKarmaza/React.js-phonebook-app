import { useSelector, useDispatch } from 'react-redux';
import {
  deleteContact,
  fetchContacts,
} from 'redux/contacts/contactsOperations';
import css from './ContactList.module.css';
import { selectFilteredContacts } from 'redux/contacts/contactsSelectors';
import { useEffect } from 'react';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={css.contact_list}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.contact_item} key={id}>
          <p className={css.contact_data}>
            {name} : {number}
          </p>
          <button
            className={css.contact_btn}
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
