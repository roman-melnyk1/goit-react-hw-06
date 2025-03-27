import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import styles from './Contact.module.css';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.contactItem}>
      <span className={styles.name}>{contact.name}</span>
      <span className={styles.number}>{contact.number}</span>
      <button
        className={styles.deleteButton}
        onClick={() => dispatch(deleteContact(contact.id))}
          >
        delete
      </button>
    </li>
  );
};

export default Contact;
