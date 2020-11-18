import React from 'react';
import {connect} from 'react-redux'
import '../stylesheets/platform.css';

import Header from '../components/header';

import ImgDesktop from '../assets/platform/darkmodernred_orig.png';
import ImgMobile from '../assets/platform/darkmodernredm.png';
import ImgNav from '../assets/platform/nav-architecture_e.png';

const Project = (props) => {
	const { isMobile } = props;
	return (
		<div className="platform">
			<Header title="THE PLATFORM" parent={'platform'} />
			<div className="content column-2">
				<div id="platform-desc">
					<h2>
						Patented Cloud Based SaaS Platform {isMobile? "": <br />}Designed from the ground up for {isMobile? "": <br />}<span>Commercial Real Estate</span>
					</h2>
					<p>
						The NavigatorCRE Platform was built to dissolve the complexity around data and programs for the
						commercial real estate professional. The platform is fully cloud based and encrypted, meaning
						you can access your system from anywhere you have an internet/cellular connection, and your data
						is protected, secure and private to your company and team. From there, you can utilize the vast
						array of tools in the platform to view, pitch, present, analyze or educate yourself on your
						commercial real estate data.
					</p>
				</div>
				<div id="platform-products-1">
					<div className="products">
						<p className="products-label products-d">Desktop</p>
						<div className="products-img-wrap">
							<img
								id="products-d"
								className="products-img"
								src={ImgDesktop}
								alt="Navigator CRE desktop app login page"
							/>
						</div>
					</div>
					<div className="products">
						<p className="products-label products-m">Mobile</p>
						<div className="products-img-wrap">
							<img
								id="products-m"
								className="products-img"
								src={ImgMobile}
								alt="Navigator CRE mobile app login page"
							/>
						</div>
					</div>
				</div>
			</div>
			<div id="platform-products-2" className="content products">
				<p className="products-label">
					US Patent for Structure {"&"} Unstructured Data Visualization for Commercial Real Estate
				</p>
				<div className="products-img-wrap">
					<img id="nav-arch-img" className="products-img2" src={ImgNav} alt="Navigator CRE architecture" />
				</div>
			</div>
		</div>
	);
};

const sToP = state => ({
	isMobile : state.manageMobileNav.isMobile
})

export default connect(sToP)(Project);
