import { useState, useEffect } from 'react';
import './App.css';

import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
const listContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
    const [contacts, setContacts] = useState(() => {
        const savedContacts = window.localStorage.getItem('saved-contacts');
        return savedContacts !== null ? JSON.parse(savedContacts) : listContacts;
    });

    const [filterContacts, setFiltrContacts] = useState('');

    const addContact = newContact => {
        setContacts(listContacts => {
            return [...listContacts, newContact];
        });
    };

    const visibleContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterContacts.toLowerCase())
    );
    const deleteContact = contactId => {
        setContacts(prevContact => {
            return prevContact.filter(contact => contact.id !== contactId);
        });
    };

    useEffect(() => {
        localStorage.setItem('saved-contacts', JSON.stringify(contacts));
    }, [contacts]);
    return (
        <>
            <h1>Phonebook</h1>
            <ContactForm onContact={addContact} />
            <SearchBox value={filterContacts} onFilterContacts={setFiltrContacts} />
            <ContactList listContacts={visibleContacts} onDelete={deleteContact} />
        </>
    );
}

export default App;
