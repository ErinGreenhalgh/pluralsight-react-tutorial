import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi'

export function loadCoursesSuccess(courses) {
  return {type: types.LOAD_COURSES_SUCCESS, courses};
}


//thunk:
export function loadCourses() {
  return function(dispatch) {
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    });
    //you can make an ajax call right here in the function
    //but it's better to abstract that logic somewhere else so that it's simple to change
    //how you're accessing data if you want to later on
  }
}
