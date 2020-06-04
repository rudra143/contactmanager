import {
	GET_CONTACTS,
	DELETE_CONTACT,
	ADD_CONTACT,
	GET_CONTACT,
	UPDATE_CONTACT
} from '../actions/types';

const initialState = {
	contact: {},
	contacts: [{
			id: "1",
			name: 'Maharudra Kekan',
			email: 'mkekan@gmail.com',
			phone: '222-222-2222'
		},
		{
			id: "2",
			name: 'Kushal Bhosale',
			email: 'kbhosale@gmail.com',
			phone: '111-111-1111'
		},
		{
			id: "3",
			name: 'Sachin Pawar',
			email: 'spawar@gmail.com',
			phone: '444-444-4444'
		}
	]
};

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_CONTACTS:
			return {
				...state
			};
		case DELETE_CONTACT:
			return {
				...state,
				contacts: state.contacts.filter(contact => contact.id !== action.payload)
			};
		case ADD_CONTACT:
			return {
				...state,
				contacts: [action.payload, ...state.contacts]
			};
		case GET_CONTACT:
			return {
				...state,
				contact: state.contacts.filter(contact => contact.id === action.payload)
			};
		case UPDATE_CONTACT:
			return {
				...state,
				contacts: state.contacts.map(contact => contact.id === action.payload.id ? (contact = action.payload) : contact)
			};
		default:
			return state;
	}
}