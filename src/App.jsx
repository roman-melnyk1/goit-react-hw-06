import React from 'react';
import ContactsForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';

const App = () => {
  return (
    <>
      <h1>Contact Book</h1>
      <ContactsForm />
      <SearchBox />
      <ContactList />
    </>
  );
};

export default App;
