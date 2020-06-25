import * as actions from '../../redux/actions';
import { connect } from 'react-redux';
import Filter from './Filter';

const mapStateToProps = state => ({
  value: state.filter,
});

const mapDispatchToProps = dispatch => ({
  handleChange: data => dispatch(actions.changeFilter(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
