import { useState, useEffect } from 'react';
import './App.css';

import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
// import { addContacts } from './redux/store';
const listContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
    const contacts = useSelector(state => state.contacts.items);
    // const [contacts, setContacts] = useState(() => {
    //     const savedContacts = window.localStorage.getItem('saved-contacts');
    //     return savedContacts !== null ? JSON.parse(savedContacts) : listContacts;
    // });

    // const dispatchApp = useDispatch()

    // const contacts = () => {
    //     const savedContacts = window.localStorage.getItem('saved-contacts');
    //     return savedContacts !== null ? dispatchApp(addContacts()) JSON.parse(savedContacts) : listContacts;
    // };

    // const [contacts, setContacts] = useState(() => {
    //     const savedContacts = window.localStorage.getItem('saved-contacts');
    //     return savedContacts !== null ? JSON.parse(savedContacts) : listContacts;
    // });

    const [filterContacts, setFiltrContacts] = useState('');

    // const visibleContacts = contacts.filter(contact =>
    //     contact.name.toLowerCase().includes(filterContacts.toLowerCase())
    // );

    useEffect(() => {
        localStorage.setItem('saved-contacts', JSON.stringify(contacts));
    }, [contacts]);
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
