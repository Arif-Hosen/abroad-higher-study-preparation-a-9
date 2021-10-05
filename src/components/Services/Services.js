import React, { useEffect, useState } from 'react';
import AllCourse from '../AllCourse/AllCourse';

const Services = () => {
    // state and data load
    const [allCourses, setAllCourses] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setAllCourses(data))
    }, [])

    return (
        <div className="row row-cols-3 mt-5">
            {/* loop through and send props */}
            {
                allCourses.map(courses => <AllCourse courses={courses}></AllCourse>)
            }
        </div>
    );
};

export default Services;