import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Course from '../Course/Course';

const Service = () => {
    const [courses, setCourses] = useState([]);
    useEffect( ()=> {
        fetch('./fakeData.json')
          .then(res => res.json())
          .then(data => setCourses(data))
    },[])
    return(
        <div className='container mb-5 mt-5'>
            <h2>Let's get some courses</h2>
        <div className='row'>
        {
             courses.map(course => <Course course={course} key={course.id}></Course>)
         }
        </div>
     </div>
    );
};
export default Service;