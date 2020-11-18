import React from 'react';
import { connect } from 'react-redux';
import '../../stylesheets/components/profeature-block.css';

import Stars from '../stars';

const Block = (props) => {
	const { isMobile } = props; 
	const content = (texts, title) => {
		return (
			<div className="block-texts-container">
				<h2>{title}</h2>
				{texts.map((text, idx) => {
					return (
						<div className="block-text-wrap" key={idx}>
							<h3>{text.subtitle}</h3>
							<p>{text.text}</p>
						</div>
					);
				})}
			</div>
		);
	};

	const direction = (props) => {
		const { img, imgDir, title, texts } = props;

		if (imgDir == 'right') {
			return (
				<div className={`content block`}>
					{isMobile ? <img src={img} /> : null }
					{content(texts, title)}
					{!isMobile ? <img src={img} /> : null }
				</div>
			);
		} else if (imgDir == 'left') {
			return (
				<React.Fragment>
					<Stars />
					<div className={`content block`}>
						<img src={img} />
						{content(texts, title)}
					</div>
				</React.Fragment>
			);
		}

		return;
	};

	return <section className={`profeature-block ${props.imgDir}`}>{direction(props)}</section>;
};

const sToP = state => ({
	isMobile: state.manageMobileNav.isMobile
})

export default connect(sToP)(Block);
