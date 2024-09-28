import { GET_SKILLS, ADD_SKILL, REMOVE_SKILL } from '../actions/types';

const initialState = {
  skills: [],
};

const skillReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SKILLS:
      return {
        ...state,
        skills: action.payload,
      };
    case ADD_SKILL:
      return {
        ...state,
        skills: [...state.skills, action.payload],
      };
    case REMOVE_SKILL:
      return {
        ...state,
        skills: state.skills.filter(skill => skill.id !== action.payload),
      };
    default:
      return state;
  }
};

export default skillReducer;
