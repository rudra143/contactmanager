import React, {
	Component
} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteContact } from '../../actions/contactActions'


class Contact extends Component {

	state = {
		showContactInfo: false
	}

	onDeleteClick = (id) => {
		this.props.deleteContact(id)
	}

	// static propTypes = {
	// 	name: PropTypes.string.isRequired,
	// 	email: PropTypes.string.isRequired,
	// 	phone: PropTypes.string.isRequired,
	// }

	render() {
		const { id, name, email, phone } = this.props.contact;
		const { showContactInfo } = this.state;

		return ( 
			<div className="card card-body mb-3">
				<h4>{name} <i style={{cursor: 'pointer'}} onClick={() => (
					this.setState({showContactInfo: !this.state.showContactInfo})
				)} className="fas fa-sort-down"></i>
					<i onClick={this.onDeleteClick.bind(this, id)} className="fa fa-times" style={{color: 'red', cursor: 'pointer', float: 'right'}}></i>
					<Link to={`/contact/edit/${id}`}>
						<i className="fa fa-pencil-alt" style={{
							cursor: 'pointer',
							color: 'black',
							marginRight: '1rem',
							float: 'right'
						}}></i>
					</Link>
				</h4>

				{showContactInfo ? (
					<ul className="list-group">
					<li className="list-group-item">Phone : {phone}</li>
					<li className="list-group-item">Email : {email}</li>
				</ul>
				) : null}
				
			</div>
		)
	}
}

Contact.propTypes = {
	contact: PropTypes.object.isRequired,
	deleteContact: PropTypes.func.isRequired
}

export default connect(null, { deleteContact })(Contact);