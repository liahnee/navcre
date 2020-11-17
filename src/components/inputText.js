import React from 'react';

export default function Text(props) {
	const { required, label, placeholder, name } = props;

	return (
		<div className="form-group col">
			<label className="demoform-label" for={name}>{!!required?<span className="red">*</span>:null}{label} </label>
			<input className="demoform-input form-control" id={name} type="text" placeholder={!!placeholder?placeholder:null}/>
		</div>
	);
}
