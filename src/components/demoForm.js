import React from 'react';
import '../stylesheets/components/demoform.css';

import Logo from '../assets/logos/navilogosub.png';
import TextInput from './inputText';
import Dropdown from './dropdown';

const DemoForm = (props) => {
	return (
		<div className="demoform content">
			<h2>Sign Up for A Demo!</h2>
			<p>Learn About ​Return on Speed (TM)</p>
			<div className="form-logo">
				<img src={Logo} alt="logo" />
			</div>
			<p className="description">
				<span className="red">*</span> INDICATES REQUIRED FIELD
			</p>
			<form className="form-container">
				<div className="row">
					<TextInput required={true} name="firstname" label="FIRST NAME" />
					<TextInput required={true} name="lastname" label="LAST NAME" />
				</div>
				<div className="row">
					<Dropdown name="job" label="TELL US ABOUT YOU" options={jobOptions} optground="Select"/>
					<TextInput required={true} name="email" label="EMAIL" />
					<TextInput name="phone" label="PHONE NUMBER" />
				</div>
				<div className="row">
					<TextInput name="company" label="COMPANY" />
					<TextInput name="interest" label="WHAT INTERESTS YOU ABOUT NAVIGATOR?" />
				</div>
				<div className="form-submit">
					<div className="demo-btn btn btn-outline-dark">Submit</div>
				</div>
			</form>
		</div>
	);
};

const jobOptions = [
	'Select',
	'Broker',
	'Manager',
	'Investor',
	'Developer',
	'Tenant',
	'Researcher/Appraiser',
	'Property Manager'
];
export default DemoForm;
