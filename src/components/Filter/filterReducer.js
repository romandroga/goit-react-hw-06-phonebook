import ACTION_TYPES from '../../utilities/actionTypes';

const filterReducer = (state = '', action) => {
  switch (action.type) {
    case ACTION_TYPES.CHANGE_FILTER:
      return action.payload;

    default:
      return state;
  }
};

export default filterReducer;
