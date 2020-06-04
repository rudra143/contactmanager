import React, { Component } from 'react'
import TextInputGroup from '../layout/TextInputGroup'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getContact, updateContact } from '../../actions/contactActions'

class EditContact extends Component {

	state = {
		id: '',
		name: '',
		email: '',
		phone: '',
		errors: {}
	}

	componentWillReceiveProps(nextProps, nextState) {
		 const { id, name, email, phone } = nextProps.contact[0]
		 
			this.setState({
				id,
				name,
				email,
				phone
			});
	}

	componentDidMount() {
		//EDIT CONTACT
		const id = this.props.match.params.id;
		this.props.getContact(id)
	}

	onChange = e => this.setState({ [e.target.name]: e.target.value })

	onSubmit = (e) => {
		e.preventDefault();

		const { name, email, phone } = this.state;

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

		const { id } = this.props.match.params;
		const updContact = {
			id,
			name,
			email,
			phone
		}

		//UPDATE CONTACT
		this.props.updateContact(updContact);

		
		this.setState({
			id: '',
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
					Update Contact
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
						<button className="btn btn-outline-success btn-block">Update Contact</button>
					</form>
				</div>
			</div>
		)
	}
}

EditContact.propTypes = {
	getContact: PropTypes.func.isRequired
}


const mapStateToProps = (state) => ({
	contact: state.contact.contact
})

export default connect(mapStateToProps, { getContact, updateContact })(EditContact);
