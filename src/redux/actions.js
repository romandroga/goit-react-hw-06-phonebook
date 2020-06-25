import ACTION_TYPES from '../utilities/actionTypes';

export const saveContact = (contact) => ({
  type: ACTION_TYPES.SAVE_CONTACT,
  payload: contact,
});

export const deleteContact = (contact) => ({
  type: ACTION_TYPES.DELETE_CONTACT,
  payload: contact,
});

export const toggleNotification = () => ({
  type: ACTION_TYPES.TOGGLE_NOTIFICATION,
});

export const loadPreviousContacts = (contacts) => ({
  type: ACTION_TYPES.LOAD_PREVIOUS_CONTACTS,
  payload: contacts,
});

export const changeFilter = (string) => ({
  type: ACTION_TYPES.CHANGE_FILTER,
  payload: string,
});
