import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../../stylesheets/components/home-picture-block.css';

const Block = (props) => {
	const [ vis, setVis ] = useState(false);
	const { isMobile } = props;

	const onHover = () => {
		setVis(true);
	};

	const overlay = (vis) => {
		// return vis ? 'visible' : 'hidden';
		return vis ? 'visible' : 'visible';
	};
	const overlayImg = (vis) => {
		// return vis ? 'blur' : 'clear';
		return vis ? 'blur' : 'blur';
	};

	return (
		<div className="home-block" onMouseEnter={onHover}>
			<img className={`block-image ${overlayImg(vis)}`} src={props.img} alt={`picture of ${props.title}`} />
			<div className={`block-overlay ${overlay(vis)}`}>
				<label>{props.title}</label>
				{isMobile ? null : <div className="divider-tiny" />}
				<p className="block-text">{props.text}</p>
			</div>
		</div>
	);
};

const sToP = (state) => ({
	isMobile: state.manageMobileNav.isMobile
});

export default connect(sToP)(Block);
