import React, { useState } from 'react';
import '../stylesheets/nav.css';
import { Link } from 'react-router-dom';

import CRELogoS from '../assets/logos/navilogosub.png';
import MenuItem from '../components/menuItem';

const Nav = (props) => {
	const [ entered, setEntered ] = useState(false);

	const width = (entered) => {
		return entered ? 'long' : 'short';
	};

	const onMouseEnter = () => {
		setEntered(true);
		return;
	};

	const onMouseLeave = () => {
		setEntered(false);
		return;
	};

	return (
		<nav className={`side-nav ${width(entered)}`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
			<Link className="menu-item" to={'/'}>
				<div className="nav-logo-container">
					<img id="nav-logo" src={CRELogoS} alt="logo" />
				</div>
			</Link>
			<div className="menu">
				{menu.map((option, idx) => {
					return (
						<MenuItem
							key={idx}
							icon={option.icon}
							text={option.text}
							link={option.link}
							entered={entered}
						/>
					);
				})}
			</div>
		</nav>

		//test long
		// <nav className={`side-nav long`}>
		// <Link className="menu-item" to={'/'}>
		// 	<div className="nav-logo-container">
		// 		<img id="nav-logo" src={CRELogoS} alt="logo" />
		// 	</div>
		// 	</Link>
		// 	<div className="menu">
		// 		{menu.map((option, idx) => {
		// 			return (
		//                 <MenuItem key={idx} icon={option.icon} text={option.text} link={option.link} entered={true}/>
		// 			);
		// 		})}
		// 	</div>
		// </nav>

		// //test short
		// <nav className={`side-nav short`}>
		// <Link className="menu-item" to={'/'}>
		// 	<div className="nav-logo-container">
		// 		<img id="nav-logo" src={CRELogoS} alt="logo" />
		// 	</div>
		// 	</Link>
		// 	<div className="menu">
		// 		{menu.map((option, idx) => {
		// 			return (
		//                 <MenuItem key={idx} icon={option.icon} text={option.text} link={option.link} entered={false}/>
		// 			);
		// 		})}
		// 	</div>
		// </nav>
	);
};

const menu = [
	{
		icon: 'fas fa-home',
		text: 'Home',
		link: ''
	},
	{
		icon: 'fas fa-project-diagram',
		text: 'Platform',
		link: 'platform'
	},
	{
		icon: 'fas fa-tasks',
		text: 'Pro Features',
		link: 'profeatures'
	},
	{
		icon: 'fas fa-users',
		text: 'Team',
		link: 'team'
	},
	{
		icon: 'far fa-address-card',
		text: 'Contact',
		link: 'contact'
	}
];

export default Nav;
