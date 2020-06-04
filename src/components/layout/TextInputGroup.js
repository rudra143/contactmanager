import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const TextInputGroup = ({
	name,
	label,
	placeholder,
	type,
	onChange,
	value,
	error
}) => {
	return (
		<div className="form-group">
			<label htmlFor={name}>{label}</label>
			<input
			onChange={onChange}
			type={type} name={name}
			className={classnames(
				'form-control',
				{'is-invalid': error}
			)}
			placeholder={placeholder}
			value={value}/>
			{error && <div className="invalid-feedback">{error}</div>}
		</div>
	)
}


TextInputGroup.propTypes = {
	name: 				PropTypes.string.isRequired,
	type: 				PropTypes.string.isRequired,
	label: 				PropTypes.string.isRequired,
	value: 				PropTypes.string.isRequired,
	onChange: 		PropTypes.func.isRequired,
	placeholder: 	PropTypes.string.isRequired,
}

TextInputGroup.defaultProps = {
	type: 'text'
}

export default TextInputGroup;
