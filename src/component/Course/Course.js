import React from 'react';
import './Course.css';

const Course = (props) => {
    console.log(props.course);
    const {course_name, img, heading, price, time} = props.course;
    return (
        
     <div className="col-md-6 g-4">
        <div className="card h-100">
          <img src={img} className="card-img-top cardImg" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{course_name}</h5>
            <p className="card-text">{heading}</p>
            <h6>${price}</h6>
            <h6>Course duration: {time}</h6>
          </div>
        </div>
      </div>
    );
};

export default Course;