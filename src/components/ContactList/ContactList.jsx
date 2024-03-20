import Contact from '../Contact/Contact';
import { list } from './ContactList.module.css';
export default function ContactList({ listContacts, onDelete }) {
    return (
        <ul className={list}>
            {listContacts.map(list => (
                <Contact list={list} key={list.id} onDelete={onDelete} />
            ))}
        </ul>
    );
}
