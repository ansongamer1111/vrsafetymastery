import { GET_USER_PROFILE, UPDATE_USER_PROFILE } from './types';
import api from '../../services/api';

export const getUserProfile = () => async dispatch => {
  try {
    const response = await api.get('/user/profile');
    dispatch({
      type: GET_USER_PROFILE,
      payload: response.data,
    });
  } catch (error) {
    console.error(error);
  }
};

export const updateUserProfile = (profileData) => async dispatch => {
  try {
    const response = await api.put('/user/profile', profileData);
    dispatch({
      type: UPDATE_USER_PROFILE,
      payload: response.data,
    });
  } catch (error) {
    console.error(error);
  }
};
