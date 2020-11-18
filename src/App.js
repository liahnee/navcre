import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './stylesheets/app.css';

import Nav from './containers/nav';
import Routes from './routes';
import Chatbox from './components/chatbox';
import Footer from './containers/footer'

import MobileNavOpener from './components/mobileNavOpener';

function App(props) {

	useEffect(() => {
		if( window.innerWidth < 800 ) {
			props.checkIsMobile(true);
		}
		window.addEventListener("resize", () => {
			console.log("innerwidth", window.innerWidth)
			if (window.innerWidth < 800) {
				props.checkIsMobile(true);
			} else {
				props.checkIsMobile(false);
			}
		});
	})



	return (
		<div className="app">
			<Nav />
			<div className="routes">
				<Routes />
			</div>
			<MobileNavOpener />
			<Chatbox />
			<Footer />
		</div>
	);
};

const sToP = state => {
	return {
		isOpen: state.manageMobileNav.open,
		isMobile: state.manageMobileNav.isMobile
	};
};

const dToP = dispatch => ({
	checkIsMobile: data => dispatch({type: 'IS_MOBILE', payload: data})
});

export default connect(sToP, dToP)(App);

