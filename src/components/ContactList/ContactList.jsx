import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import css from './ContactList.module.css';
import { selectFilteredContacts } from 'redux/contacts/contactsSelectors';
import { Button } from '@chakra-ui/react';
export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  return (
    <ul className={css.contact_list}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.contact_item} key={id}>
          <p>
            {name} : {number}
          </p>
          <Button
            colorScheme="teal"
            variant="solid"
            size={'sm'}
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
};
