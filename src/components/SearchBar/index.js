import React from 'react'
import './Search.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';

export default () => {
    return (
        <div className="searchbar">
            <div className="searchbar-content">
            <FontAwesomeIcon className="fasearch" icon={faSearch} size="2x" />
                <input type="text"
                    placeholder="Search for movies..."
                    />
            </div>
        </div>
    )
}
