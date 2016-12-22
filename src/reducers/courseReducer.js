import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
  switch(action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
      //whatever is returned from our API will replace our state
    default:
      return state;
  }
}
