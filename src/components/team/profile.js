import React from 'react';
import '../../stylesheets/components/profile.css';

const Profile = (props) => {
	const { name, phone, email, twitter, title, text } = props.ind;

	return (
		<div className="profile content">
			<div>
				<h3>{name}</h3>
				{!!phone ? <p>P: {phone}</p> : ''}
				{!!email ? <p>E: {email}</p> : ''}
				{!!twitter ? <p>T: {twitter}</p> : ''}
			</div>
			<div>
				<p className="profile-title">{title}</p>
				<p>{text}</p>
			</div>
		</div>
	);
};

export default Profile;
