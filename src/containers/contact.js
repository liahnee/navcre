import React from 'react';
import '../stylesheets/contact.css';

import Header from '../components/header';
import Demo from '../components/demoForm';

import Stars from '../components/stars';
import Logo from '../assets/logos/crelogo.png';

const Contact = (props) => {
	return (
		<div className="contact">
			<Header title="CONNECT" parent={'contact'} />
			<div className="contact-top content">
				<div id="t-1">
					<img src={Logo} alt="Navigator CRE logo" />
					<p>Looking to get in touch with us?</p>
					<p>
						Call us, email us or chat with us regarding your future with NavigatorCRE. ​We are here to serve
						you and look forward to speaking with you.
					</p>
				</div>
				<div id="t-2">
					<h2 className="h2-s">EMAIL</h2>
					<ul>
						<li>sales@navigatorcre.com</li>
						<li>support@navigatorcre.com</li>
						<li>marketing@navigatorcre.com</li>
					</ul>
					<h2 className="h2-s">TELEPHONE</h2>
					<ul>
						<li>+1 206 701 0270</li>
						<li>+1 866 449 NAVI (6284)</li>
					</ul>
				</div>
			</div>
			<div className="contact-bottom content">
				<div id="map">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.827644043444!2d-122.33661328436943!3d47.610040979184944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906ab4668c4001%3A0xd11834aad556244c!2s500%20Union%20St%20%231000%2C%20Seattle%2C%20WA%2098101!5e0!3m2!1sen!2sus!4v1605632562451!5m2!1sen!2sus"
						width="600"
						height="450"
						frameBorder="0"
						style={{ border: 0 }}
						allowFullScreen=""
						aria-hidden="false"
						tabIndex="0"
					/>
				</div>
				<div className="addresses">
					<div>
						<h2 className="h2-s">CORPORATE HEADQUARTERS</h2>
						<p>
							500 Union Street, Suite 1000<br />
							​Seattle, WA 98101
						</p>
					</div>
					<div>
						<h2 className="h2-s">SDO LOS ANGELES</h2>
						<p>
							200 Pier Avenue, Suite 426<br />
							Hermosa Beach, CA 90254
						</p>
					</div>
					<div>
						<h2 className="h2-s">SDO DALLAS</h2>
						<p>
							1919 McKinney Ave, Suite 2022 <br />
							Dallas, TX 75201
						</p>
					</div>
				</div>
			</div>
			<div className="contact-demo">
                <Stars />
				<Demo />
			</div>
		</div>
	);
};

export default Contact;

// navlogo left, email right
// google map left, locations right
