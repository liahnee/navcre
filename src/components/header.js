import React from 'react';
import '../stylesheets/components/header.css';

const Header = props => {

    const parent = parent => {

        return !!parent ? parent : '';
    }

    return (
        <div className={`header ${parent(props.parent)}`}>
            <h1>{props.title}</h1>
        </div>
    )
};

export default Header;