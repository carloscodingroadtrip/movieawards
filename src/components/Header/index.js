import React from 'react'
import {Link} from 'react-router-dom';
import './Header.scss'

export default () => {
    return (
        <div className="header">
            <div className="header-content">
                <Link to="/" className="logo">Movie Awards App</Link>
            </div>
        </div>
    )
}
