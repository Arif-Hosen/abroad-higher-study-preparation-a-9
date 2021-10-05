import { Button } from 'react-bootstrap';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './AllCourse.css'

const AllCourse = (props) => {
    const { name, img, price } = props.courses;
    console.log(props);
    return (
        <div>
            {/* react-bootstrap card */}
            <Row xs={1} md={1} >

                <Col>
                    <Card className="m-3 all-card">
                        <div className="card-img">
                            <Card.Img variant="top" src={img} />
                        </div>
                        <Card.Body>
                            <Card.Title className="fw-bold">{name}</Card.Title>
                            <Card.Text className="fw-bold">
                                Price: $   {price}
                            </Card.Text>
                            <Button>Enroll Now</Button>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>

        </div>
    );
};

export default AllCourse;