import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { list } from './ContactList.module.css';
export default function ContactList() {
    const listContacts = useSelector(state => state.contacts.items);

    return (
        <ul className={list}>
            {listContacts.map(list => (
                <Contact list={list} key={list.id} />
            ))}
        </ul>
    );
}
