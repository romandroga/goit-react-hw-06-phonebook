import * as actions from '../../redux/actions';
import { connect } from 'react-redux';
import ContactList from './ContactList';

const mapDispatchToProps = dispatch => ({
  onDelete: data => dispatch(actions.deleteContact(data)),
});


export default connect(null, mapDispatchToProps)(ContactList);
