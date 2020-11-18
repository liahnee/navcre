import React from 'react';
import { connect } from 'react-redux';
import '../stylesheets/components/bannerA.css';

const BannerA = (props) => {
	const { isMobile } = props;
	return (
		<div className="bannerAB" id="bannerA">
			<div className="content bannerA">
				<div className="bannerAB-img-wrap">
					<img className="bannerAB-img" src={props.img} alt={props.alt} />
				</div>
				<div className="bannerAB-wrap">
					<h2 className="bannerAB-title">{props.title}</h2>
					<div className="bannerA-text-wrap">
						{isMobile ? <img className="bannerAB-icon" src={props.icon} /> : null}
						<p className="bannerAB-text">{props.text}</p>
						{!isMobile ? <img className="bannerAB-icon" src={props.icon} /> : null}
					</div>
				</div>
			</div>
		</div>
	);
};

const sToP = (state) => ({
	isMobile: state.manageMobileNav.isMobile
});

export default connect(sToP)(BannerA);
