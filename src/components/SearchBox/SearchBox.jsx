import { useId } from 'react';
// import { useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { nameFilter } from '../../redux/filtersSlice';
export default function SearchBox({ value, onFilterContacts }) {
    const searchBoxId = useId();
    const selectNameFilter = useSelector(state => state.filters.name);
    // const selectContacts = useSelector(state => state.contacts.items);
    const dispatch = useDispatch();
    const listConst = useSelector(state => state.contacts.items);
    console.log(
        listConst.filter(contact =>
            contact.name.toLowerCase().includes(selectNameFilter.toLowerCase())
        )
    );
    // dispatch(
    //     selectContacts.filter(contact =>
    //         contact.name.toLowerCase().includes(selectNameFilter.toLowerCase())
    //     )
    // );

    return (
        <div className={css.box}>
            <label htmlFor={searchBoxId} className={css.text}>
                Find contacts by name
            </label>
            <input
                className={css.input}
                type="text"
                value={selectNameFilter}
                onChange={e => dispatch(nameFilter(e.target.value))}
                id={searchBoxId}
            />
        </div>
    );
}
