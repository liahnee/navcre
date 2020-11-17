import React from 'react';
import '../stylesheets/components/bannerA.css';

const BannerA = (props) => {
	return (
		<div className="bannerAB" id="bannerA">
			<div className="content bannerA">
				<div className="bannerAB-img-wrap">
					<img className="bannerAB-img" src={props.img} alt={props.alt} />
				</div>
				<div className="bannerAB-wrap">
					<h2 className="bannerAB-title">{props.title}</h2>
					<div className="bannerA-text-wrap">
						<p className="bannerAB-text">{props.text}</p>
						<img className="bannerAB-icon" src={props.icon} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default BannerA;
