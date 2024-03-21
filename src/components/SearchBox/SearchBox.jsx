import { useId } from 'react';
// import { useSelector } from 'react-redux';
import css from './SearchBox.module.css';
export default function SearchBox({ value, onFilterContacts }) {
    const searchBoxId = useId();
    // const listConst = useSelector(state => state.contacts.items);
    // const visibleContacts = listConst.filter(contact =>
    //     contact.name.toLowerCase().includes(filterContacts.toLowerCase())
    // );

    return (
        <div className={css.box}>
            <label htmlFor={searchBoxId} className={css.text}>
                Find contacts by name
            </label>
            <input
                className={css.input}
                type="text"
                value={value}
                onChange={e => onFilterContacts(e.target.value)}
                id={searchBoxId}
            />
        </div>
    );
}
