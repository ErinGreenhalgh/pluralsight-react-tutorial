import { combineReducers } from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
  courses
});

export default rootReducer;

//we're defining an object courses: courses
//ES6 shorthand property name
