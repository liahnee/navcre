import React from 'react';
import '../stylesheets/footer.css';

import FREC from '../assets/footer/frec2020_orig.webp';
import SRVSlogo from '../assets/footer/navsrvsgroup-1-orig_2.png';

const Footer = props => {

    return (
        <div className="footer">
            <img id="frec" src={FREC} alt="" />
            <img id="srvs-logo" src={SRVSlogo} alt="logo of Navigator SRVS" />
        </div>
    );
};

export default Footer;