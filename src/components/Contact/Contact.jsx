import css from './Contact.module.css';
export default function Contact({ list: { name, number, id }, onDelete }) {
    return (
        <li className={css.contactBox}>
            <div className={css.info}>
                <h3 className={css.text}>{name}</h3>
                <p className={css.text}>{number}</p>
                <button className={css.button} onClick={() => onDelete(id)}>
                    Delete
                </button>
            </div>
        </li>
    );
}
