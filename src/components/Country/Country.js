import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import './Country.css'

const Country = (props) => {
    // destructure of object
    const { name, img, title } = props.country;
    return (
        <div>
            {/* country card */}
            <Row xs={1} md={1} >

                <Col>
                    <Card className="m-3 country-card">
                        <div className="country-img">
                            <Card.Img variant="top" src={img} />
                        </div>
                        <Card.Body>
                            <Card.Title className="fs-4 fw-bold">{name}</Card.Title>
                            <Card.Text >
                                {title}
                            </Card.Text>
                            <Button>Learn More</Button>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </div>
    );
};

export default Country;