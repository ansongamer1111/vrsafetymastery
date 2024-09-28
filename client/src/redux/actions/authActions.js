import { LOGIN_SUCCESS, LOGOUT } from './types';
import api from '../../services/api';

export const login = (credentials) => async dispatch => {
  try {
    const response = await api.post('/auth/login', credentials);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.error('Error logging in:', error);
  }
};

export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT,
  });
};
