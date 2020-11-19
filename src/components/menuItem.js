import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const MenuItem = (props) => {
	const { link, icon, open, close, text, isMobile } = props;
	const showText = (entered) => {
		return entered ? 'long' : 'short';
	};

	const scrollTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
		return;
	};
	const onClick = () =>{
		scrollTop();
		if (isMobile) {
			close();

		}
		return;
	};

	return (
		<Link to={link} onClick={onClick}>
			<div className={`menu-item menu-text-container ${showText(open)}`}>
				<div className="menu-icon">
					<i className={icon} />
				</div>
				<span className={`menu-item-text ${showText(open)}`}>{text}</span>
			</div>
		</Link>
	);
};

const sToP = state => ({
	isMobile: state.manageMobileNav.isMobile
});

export default connect(sToP)(MenuItem);
