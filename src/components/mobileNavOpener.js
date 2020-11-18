import React from 'react';
import '../stylesheets/components/mobileNav.css';
import { connect } from 'react-redux';

const MobileNavOpener = props => {

    return (
        <div className="mobile-nav-opener" onClick={() => props.open(true)}>
            <i className="fas fa-bars"></i>
        </div>
    )
};


const sToP = state => ({
    open: state.manageMobileNav.open
})

const dToP = dispatch => ({
    open: data => dispatch({ type: "OPEN", payload: data })
})

export default connect(sToP, dToP)(MobileNavOpener);
