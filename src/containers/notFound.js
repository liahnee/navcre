import React from 'react';
import '../stylesheets/not-found.css';
import Header from '../components/header';

const NotFound = (props) => {

    return (
        <div className="profeatures">
            <Header title="" parent={""}/>
			<div className="not-found">404 Page Not Found</div>
        </div>
    );
};

export default NotFound;
