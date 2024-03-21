import { useDispatch, useSelector } from 'react-redux';
import css from './Contact.module.css';
import { deleteContacts } from '../../redux/contactsSlice';

export default function Contact({ list: { name, number, id } }) {
    const dispatch = useDispatch();

    return (
        <li className={css.contactBox}>
            <div className={css.info}>
                <h3 className={css.text}>{name}</h3>
                <p className={css.text}>{number}</p>
                <button className={css.button} onClick={() => dispatch(deleteContacts(id))}>
                    Delete
                </button>
            </div>
        </li>
    );
}
