import { GET_COURSES, GET_COURSE } from './types';
import api from '../../services/api';

export const getCourses = () => async dispatch => {
  try {
    const response = await api.get('/courses');
    dispatch({
      type: GET_COURSES,
      payload: response.data,
    });
  } catch (error) {
    console.error('Error fetching courses:', error);
  }
};

export const getCourse = (id) => async dispatch => {
  try {
    const response = await api.get(`/courses/${id}`);
    dispatch({
      type: GET_COURSE,
      payload: response.data,
    });
  } catch (error) {
    console.error('Error fetching course:', error);
  }
};
