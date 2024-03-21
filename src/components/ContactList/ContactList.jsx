import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { list } from './ContactList.module.css';
export default function ContactList() {
    const selectContacts = useSelector(state => state.contacts.items);
    // console.log(selectContacts);

    return (
        <ul className={list}>
            {selectContacts.map(list => (
                <Contact list={list} key={list.id} />
            ))}
        </ul>
    );
}
