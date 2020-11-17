import React from 'react';
import '../stylesheets/footer.css';

import FREC from '../assets/footer/frec2020_orig.webp';
import SRVSlogo from '../assets/footer/navsrvsgroup-1-orig_2.png';

const Footer = (props) => {
	return (
		<div className="footer">
			<img id="frec" src={FREC} alt="" />
			<div className="links">
				{list.map((i, idx) => {
					return (
						<div className="link-col" key={idx}>
							<p> {i.title} </p>
							<ul>
								{i.items.map((j, jIdx) => {
									return <li key={jIdx}>{j}</li>;
								})}
							</ul>
						</div>
					);
				})}
			</div>
			<div className="f-3">
				<img id="srvs-logo" src={SRVSlogo} alt="logo of Navigator SRVS" />
                <div className="sns">
                    {sns.map((i, idx) => {
                        return <i class={i.icon}></i>;
                    })}
                </div>
				<p className="font-s">
					NavigatorSRVS, Inc.© COPYRIGHT 2020<br />
					ALL RIGHTS RESERVED
				</p>
			</div>
		</div>
	);
};

export default Footer;

const list = [
	{
		title: 'Platform',
		items: [ 'PLATFORM', 'PRO FEATURES', 'SECURITY' ]
	},
	{
		title: 'Company',
		items: [ 'TEAM', 'ADVISORS' ]
	},
	{
		title: 'Support',
		items: [ 'CONTACT', 'TERMS OF USE', 'PRIVACY POLICY' ]
	}
];

const sns = [
    {name: "facebook", icon: "fab fa-facebook-f"},
    {name: "twitter", icon: "fab fa-twitter"},
    {name: "linkedin", icon: "fab fa-linkedin-in"},
    {name: "email", icon: "far fa-envelope"}
]