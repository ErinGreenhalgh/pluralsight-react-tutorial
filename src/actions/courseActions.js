export function createCourse(course) {
  return {type: 'CREATE_COURSE', course}
  //in ES6, we can omit the right hand side if it matches the left side
  //rather than saying course: course
}
