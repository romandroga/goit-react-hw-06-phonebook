import * as actions from '../../redux/actions';
import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = state => ({
  contacts: state.contacts,
  notificationIsOpen: state.notificationIsOpen,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  onSave: contact => dispatch(actions.saveContact(contact)),
  toggleNotification: () => dispatch(actions.toggleNotification()),
  loadPreviousContacts: contacts =>
    dispatch(actions.loadPreviousContacts(contacts)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
