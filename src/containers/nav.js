import React, { useState } from 'react';
import '../stylesheets/nav.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CRELogoS from '../assets/logos/navilogosub.png';
import MenuItem from '../components/menuItem';

const Nav = (props) => {
	const { isMobile, isOpen, open, close } = props;
	const width = (isOpen, isMobile) => {
		if (isMobile) {
			return isOpen ? 'long' : 'closed';
		} else {
			return isOpen ? 'long' : 'short';
		}
	};

	const overlay = (isMobile, isOpen) => {
		if (isMobile && isOpen) {
			return <div className="nav-overlay" onClick={close} />;
		}
		return;
	};

	return (
		<React.Fragment>
			{overlay(isMobile, isOpen)}
			<nav className={`side-nav ${width(isOpen, isMobile)}`} onMouseEnter={open} onMouseLeave={close}>
				<Link className="menu-item" to={'/'}>
					<div className="nav-logo-container">
						<img id="nav-logo" src={CRELogoS} alt="logo" />
					</div>
				</Link>
				<div className="menu">
					{menu.map((option, idx) => {
						return (
							<MenuItem key={idx} icon={option.icon} text={option.text} link={option.link} open={open} />
						);
					})}
				</div>
			</nav>
		</React.Fragment>
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

const sToP = (state) => ({
	isMobile: state.manageMobileNav.isMobile,
	isOpen: state.manageMobileNav.open
});

const dToP = (dispatch) => ({
	open: () => dispatch({ type: 'OPEN', payload: true }),
	close: () => dispatch({ type: 'OPEN', payload: false })
});

export default connect(sToP, dToP)(Nav);
