import { GET_COURSES, GET_COURSE } from '../actions/types';

const initialState = {
  courses: [],
  course: null,
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COURSES:
      return {
        ...state,
        courses: action.payload,
      };
    case GET_COURSE:
      return {
        ...state,
        course: action.payload,
      };
    default:
      return state;
  }
};

export default courseReducer;
