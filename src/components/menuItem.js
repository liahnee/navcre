import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = (props) => {
	const showText = (entered) => {
		return entered ? 'long' : 'short';
	};

	return (
		<Link to={props.link}>
			<div className={`menu-item ${showText(props.entered)}`}>
				<div className="menu-icon">
					<i className={props.icon} />
				</div>
				<span className={`menu-item-text ${showText(props.entered)}`}>{props.text}</span>
			</div>
		</Link>
	);
};

export default MenuItem;
