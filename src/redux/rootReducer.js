import { combineReducers } from 'redux';
import contactsReducer from '../components/ContactList/contactListReducer';
import filterReducer from '../components/Filter/filterReducer';
import notificationReducer from '../components/Notification/notificationReducer';

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  notificationIsOpen: notificationReducer,
});
