import { combineReducers } from 'redux';
import userReducer from './userReducer';
import authReducer from './authReducer';
import skillReducer from './skillReducer';
import courseReducer from './courseReducer';
import notificationReducer from './notificationReducer';

const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  skills: skillReducer,
  courses: courseReducer,
  notifications: notificationReducer,
});

export default rootReducer;
