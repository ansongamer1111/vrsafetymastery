import { GET_USER_PROFILE, UPDATE_USER_PROFILE } from '../actions/types';

const initialState = {
  profile: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case UPDATE_USER_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
