import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = (props) => {
	const { link, icon, open, close, text } = props;
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
		close();
		return;
	};

	return (
		<Link to={link} onClick={onClick}>
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
