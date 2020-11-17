import React from 'react';

export default function Text(props) {
	const { options, label, required, name } = props;

	return (
		<div className="form-group col">
            <label htmlFor={name} className="demoform-label">{!!required?<span className="red">*</span>:null}{label}</label>
			<select className="form-control">
				{options.map((opt, idx) => {
					return <option key={idx}>{opt}</option>;
				})}
			</select>
		</div>
	);
}
