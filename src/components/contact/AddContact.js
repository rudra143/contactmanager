import React, { Component } from 'react'
import TextInputGroup from '../layout/TextInputGroup'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addContact } from '../../actions/contactActions'

class AddContact extends Component {

	state = {
		name: '',
		email: '',
		phone: '',
		errors: {}
	}

	onChange = e => this.setState({ [e.target.name]: e.target.value })

	onSubmit = (e) => {
		e.preventDefault();

		const { name, email, phone } = this.state;

		const newContact = {
			name,
			email,
			phone
		}

		if(name === '') {
			this.setState({errors: {name: "Name is Required"}})
			return;
		}

		if(email === '') {
			this.setState({errors: {email: "Email is Required"}})
			return;
		}

		if(phone === '') {
			this.setState({errors: {phone: "Phone is Required"}})
			return;
		}

		// ADD CONTACT
		this.props.addContact(newContact);
		
		
		this.setState({
			name: '',
			email: '',
			phone: '',
			errors: ''
		});

		this.props.history.push('/');
	}
	render() {

		const { name, email, phone, errors } = this.state;

		return (
			<div className="card mb-3">
				<div className="card-header">
					Add Contact
				</div>
				<div className="card-body">
					<form onSubmit={this.onSubmit}>
						<TextInputGroup 
						name="name"
						label="Name"
						placeholder="Enter Name..."
						onChange={this.onChange}
						value={name}
						error={errors.name} />
						<TextInputGroup 
						name="email"
						label="Email"
						type="email"
						placeholder="Enter Email..."
						onChange={this.onChange}
						value={email}
						error={errors.email} />
						<TextInputGroup 
						name="phone"
						label="Phone"
						placeholder="Enter Phone..."
						onChange={this.onChange}
						value={phone}
						error={errors.phone} />
						<button className="btn btn-outline-success btn-block">Add Contact</button>
					</form>
				</div>
			</div>
		)
	}
}

AddContact.propTypes = {
	addContact: PropTypes.func.isRequired
}

export default connect(null, { addContact })(AddContact);
