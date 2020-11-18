import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = (props) => {
	const { link, icon, open, text } = props;
	const showText = (entered) => {
		return entered ? 'long' : 'short';
	};

	return (
		<Link to={link}>
			<div className={`menu-item ${showText(open)}`}>
				<div className="menu-icon">
					<i className={icon} />
				</div>
				<span className={`menu-item-text ${showText(open)}`}>{text}</span>
			</div>
		</Link>
	);
};

export default MenuItem;
