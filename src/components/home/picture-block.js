import React, { useState } from 'react';
import '../../stylesheets/components/home-picture-block.css';

const Block = (props) => {
	const [ vis, setVis ] = useState(false);

	const onHover = () => {
		setVis(true);
	};

	const overlay = (vis) => {
		return vis ? 'visible' : 'hidden';
	};
	const overlayImg = (vis) => {
		return vis ? 'blur' : 'clear';
	}

	return (
		<div className="home-block" onMouseEnter={onHover}>
			<img className={`block-image ${overlayImg(vis)}`} src={props.img} alt={`picture of ${props.title}`} />
			<div className={`block-overlay ${overlay(vis)}`}>
				<label>{props.title}</label>
				<div className="divider-tiny"></div>
				<p className="block-text">{props.text}</p>
			</div>
		</div>
	);
};

export default Block;
