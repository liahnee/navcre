import React from 'react';
import '../stylesheets/components/bannerA.css';

const BannerB = (props) => {
	return (
		<div className="bannerAB" id="bannerB">
			<div className="content bannerB">
				<div className="bannerAB-wrap">
					<h2 className="bannerAB-title">{props.title}</h2>
					<div className="bannerB-text-wrap">
						<img className="bannerAB-icon" src={props.icon} />
						<p className="bannerAB-text">{props.text}</p>
					</div>
				</div>
				<div className="bannerAB-img-wrap">
					<img className="bannerAB-img" src={props.img} alt={props.alt} />
				</div>
			</div>
		</div>
	);
};

export default BannerB;
