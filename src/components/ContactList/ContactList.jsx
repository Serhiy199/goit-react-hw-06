import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { list } from './ContactList.module.css';

export default function ContactList() {
    const selectContacts = useSelector(state => state.contacts.items);
    const selectNameFilter = useSelector(state => state.filters.name);
    const visibleContacts = selectContacts.filter(contact =>
        contact.name.toLowerCase().includes(selectNameFilter.toLowerCase())
    );

    return (
        <ul className={list}>
            {visibleContacts.map(list => (
                <Contact list={list} key={list.id} />
            ))}
        </ul>
    );
}
