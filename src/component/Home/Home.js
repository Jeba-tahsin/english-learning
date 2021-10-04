import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Course from '../Course/Course';

const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect( ()=> {
        fetch('./fakeData.json')
          .then(res => res.json())
          .then(data => setCourses(data))
    },[])
    return (
        <div className='container mb-5 mt-5'>
           <div className='row'>
           {
                courses.slice(0,4).map(course => <Course course={course} key={course.id}></Course>)
            }
           </div>
        </div>
    );
};

export default Home;