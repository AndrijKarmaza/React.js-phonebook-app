import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { useSelector } from 'react-redux';
// import { useDispatch} from 'react-redux';
// import { useEffect } from 'react';
// import { fetchContacts } from 'redux/contacts/operations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';

const Contacts = () => {
  //   const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  //   useEffect(() => {
  //     dispatch(fetchContacts());
  //   }, [dispatch]);

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && Loading.standard('Loading')}
      {!isLoading && Loading.remove()}
      {error &&
        Notify.failure('Something went wrong please try to reload page.')}
      {contacts.length === 0 ? (
        <p className="list-text">Add your first contact</p>
      ) : (
        <ContactList />
      )}
    </div>
  );
};

export default Contacts;
