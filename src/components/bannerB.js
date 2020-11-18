import React from 'react';
import { connect } from 'react-redux';
import '../stylesheets/components/bannerA.css';

const BannerB = (props) => {
	const { isMobile } = props;
	const image = () => {
		return (
			<div className="bannerAB-img-wrap">
				<img className="bannerAB-img" src={props.img} alt={props.alt} />
			</div>
		);
	};
	return (
		<div className="bannerAB" id="bannerB">
			<div className="content bannerB">
				{isMobile ? image() : null}
				<div className="bannerAB-wrap">
					<h2 className="bannerAB-title">{props.title}</h2>
					<div className="bannerB-text-wrap">
						<img className="bannerAB-icon" src={props.icon} />
						<p className="bannerAB-text">{props.text}</p>
					</div>
				</div>
				{!isMobile ? image() : null}
			</div>
		</div>
	);
};

const sToP = state => ({
	isMobile: state.manageMobileNav.isMobile
})

export default connect(sToP)(BannerB);
