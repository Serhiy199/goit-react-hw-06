import { useId } from 'react';
import { box, text, input } from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { nameFilter } from '../../redux/filtersSlice';

export default function SearchBox() {
    const searchBoxId = useId();
    const selectNameFilter = useSelector(state => state.filters.name);
    const dispatch = useDispatch();

    return (
        <div className={box}>
            <label htmlFor={searchBoxId} className={text}>
                Find contacts by name
            </label>
            <input
                className={input}
                type="text"
                value={selectNameFilter}
                onChange={e => dispatch(nameFilter(e.target.value))}
                id={searchBoxId}
            />
        </div>
    );
}
