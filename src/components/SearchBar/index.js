import React, {useState, useRef} from 'react'
import './Search.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';

export default ({callback}) => {
    const [inputValue, setInputValue] = useState('')
    const timeOut = useRef(null);

    const doSearch = (event) => {
        const { value } = event.target;
        clearTimeout(timeOut.current);
        setInputValue(value);

        timeOut.current = setTimeout(() => {
            callback(value);
        }, 700);
    };

    return (
        <div className="searchbar">
            <div className="searchbar-content">
            <FontAwesomeIcon className="fasearch" icon={faSearch} size="2x" />
                <input type="text"
                    placeholder="Search for movies..."
                    onChange={doSearch}
                    value={inputValue}
                    />
            </div>
        </div>
    )
}
