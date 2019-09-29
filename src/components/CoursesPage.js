import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";

/*function CoursePage(props) {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then(_courses => setCourses(_courses));
  }, []);


  return (
    <>
      <h2>Courses</h2>
      <Link to="/course" className="btn btn-primary">
        Add Course
      </Link>
      <br></br>
      <CourseList courses={courses} />
    </>
  );
}*/

class CoursePage extends React.Component {
  state = {
    course: {
      title: ""
    }
  };

  handleChange(event) {
    event.preventDefault();
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course: course });
  }

  handleSubmit = event => {
    event.preventDefault();
    alert(this.state.course.title);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={this.handleChange.bind(this)}
          value={this.state.course.title}
        ></input>
        <input type="submit" value="Save"></input>
      </form>
    );
  }
}

export default CoursePage;
