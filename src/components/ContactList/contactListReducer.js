import ACTION_TYPES from '../../utilities/actionTypes';

const INITIAL_STATE = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOAD_PREVIOUS_CONTACTS:
      return action.payload;

    case ACTION_TYPES.SAVE_CONTACT:
      localStorage.setItem(
        'contacts',
        JSON.stringify([...state, action.payload]),
      );
      return [...state, action.payload];

    case ACTION_TYPES.DELETE_CONTACT:
      const updatedState = state.filter(
        contact => contact.id !== action.payload,
      );
      localStorage.setItem('contacts', JSON.stringify(updatedState));
      return updatedState;

    default:
      return state;
  }
};

export default contactsReducer;
