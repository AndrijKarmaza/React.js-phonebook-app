import { useDispatch } from 'react-redux';
import { filteredConcacts } from 'redux/contacts/filterSlice';
import css from './Filter.module.css';
import { Input } from '@chakra-ui/react';

export const Filter = ({ value }) => {
  const dispatch = useDispatch();

  const filterContacts = evt => {
    dispatch(filteredConcacts(evt.currentTarget.value));
  };

  return (
    <label className={css.filter_label}>
      Find contact by name
      <Input type="text" value={value} onChange={filterContacts}></Input>
    </label>
  );
};
