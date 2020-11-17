import React from 'react';

export default function Text(props) {
	const { options, label, required, name } = props;

	return (
		<div className="form-group col">
            <label for={name} className="demoform-label">{!!required?<span className="red">*</span>:null}{label}</label>
			<select class="form-control">
				{options.map((opt, idx) => {
					return <option key={idx}>{opt}</option>;
				})}
			</select>
		</div>
	);
}
