import { GET_SKILLS, ADD_SKILL, REMOVE_SKILL } from './types';
import api from '../../services/api';

export const getSkills = () => async dispatch => {
  try {
    const response = await api.get('/skills');
    dispatch({
      type: GET_SKILLS,
      payload: response.data,
    });
  } catch (error) {
    console.error('Error fetching skills:', error);
  }
};

export const addSkill = (skill) => async dispatch => {
  try {
    const response = await api.post('/skills', skill);
    dispatch({
      type: ADD_SKILL,
      payload: response.data,
    });
  } catch (error) {
    console.error('Error adding skill:', error);
  }
};

export const removeSkill = (id) => async dispatch => {
  try {
    await api.delete(`/skills/${id}`);
    dispatch({
      type: REMOVE_SKILL,
      payload: id,
    });
  } catch (error) {
    console.error('Error removing skill:', error);
  }
};
