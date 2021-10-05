import { Button } from 'react-bootstrap';
import React from 'react';
import './Course.css'

const Course = (props) => {
    // destructure of object
    const { name, img, price } = props.course;

    return (
        <div>
            {/* home page course card  */}
            <div className="card mb-3 cart-container" >
                <div className="row g-0 row-cols-2 cart">

                    <div className="col-md-8 p-2">
                        <img src={img} className="w-100 rounded  " alt="..." />
                    </div>
                    <div class="col-md-4 d-flex align-items-center">
                        <div className="card-body p-10">
                            <h3 className="card-title">{name}</h3>
                            <h4 className="card-text">Price: $ {price}</h4>
                            <Button variant="primary">Enroll</Button>

                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Course;