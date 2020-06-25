import ACTION_TYPES from '../../utilities/actionTypes';

const notificationReducer = (state = false, action) => {
  switch (action.type) {
    case ACTION_TYPES.TOGGLE_NOTIFICATION:
      return !state;

    default:
      return state;
  }
};

export default notificationReducer;
