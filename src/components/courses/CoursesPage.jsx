import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      course: {title: ""}
    };
    this.onTitleChange = this.onTitleChange.bind(this)
    this.onClickSave = this.onClickSave.bind(this)
    //this is more performant than binding in render
    //b/c it causes a new function to be created on each render
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({ course: course});
  }

  onClickSave() {
    // alert(`Saving ${this.state.course.title}`);
    this.props.dispatch(courseAcions.createCourse(this.state.course));
    //this is one way to do this, but it is pretty verbose 
  }
  render() {
    return (
      <div>
        <h1>Courses</h1>
        <h2>Add Course</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title} />
        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave} />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
    //this property on state is determined by the choice we made in our rootReducer
  };
}
//define an object that returns the properties we'd like to see exposed on our component
//access courses by saying this.props.courses up in the CoursesPage component
//ownProps lets us access props that are being attached to this component



export default connect(mapStateToProps)(CoursesPage);
//export your component decorated by the connect function
// two function calls: connect with the two maps returns a function, which takes in the CoursesPage as a param
/* alternative setup:
const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default connectedStateAndProps(CoursesPage); */

/* mapDispatchToProps is an optional param; when it's omitted from the connect function ,
our component automatically gets a dispatch property attached to it, injected by connect
this.props.dispatch
dispatch is a function that allows you to fire off actions
