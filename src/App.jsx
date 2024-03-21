import { useState } from 'react';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

function App() {
    const [filterContacts, setFiltrContacts] = useState('');

    // const visibleContacts = contacts.filter(contact =>
    //     contact.name.toLowerCase().includes(filterContacts.toLowerCase())
    // );

    return (
        <>
            <h1>Phonebook</h1>
            <ContactForm />
            <SearchBox value={filterContacts} onFilterContacts={setFiltrContacts} />
            <ContactList />
        </>
    );
}

export default App;
