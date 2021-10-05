import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Course from '../Course/Course';
import './Home.css';

const Home = () => {
    // state and data load
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./home.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div>
            {/* carousel */}
            <div className=" mx-auto ">
                <Carousel >

                    <Carousel.Item>
                        <img
                            className="d-block w-100 "
                            src="https://image.freepik.com/free-photo/book-with-green-board-background_1150-3837.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h2 className="carousel-text">Explore the world with us</h2>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>

                        <img className="d-block w-100"
                            src="https://image.freepik.com/free-photo/free-time-students-bachelor-s-campus-life-rhythm-five-friendly-students-are-walking_8353-6408.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h2 className="carousel-text">Accelarate your Knowledge</h2>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>

                        <img className="d-block w-100"
                            src="https://image.freepik.com/free-photo/group-students-celebrating-graduation-together-wearing-face-masks_1303-27685.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h2 className="carousel-text">Learn and serve the world</h2>

                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </div>

            {/* courses */}
            <div className="row row-cols-2 mt-5">
                {
                    courses.map(course => <Course course={course}></Course>)
                }

            </div >
        </div>
    );
};

export default Home;