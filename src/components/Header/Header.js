import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { FormControl, InputGroup, Button } from 'react-bootstrap';


const Header = () => {
    // object for style
    const activeStyle = {
        fontWeight: "bold",
        color: "red",

    };
    return (
        <div>
            <h1 className="site-name">Abroad <span>Higher Study  Preparation</span></h1>
            {/* navlink */}
            <div className="nav-container">
                <NavLink className="nav-link" to="/home" activeStyle={activeStyle} >Home
                </NavLink>
                <NavLink className="nav-link" to="/about" activeStyle={activeStyle} >About</NavLink>
                <NavLink className="nav-link" to="/course" activeStyle={activeStyle} >Course</NavLink>
                <NavLink className="nav-link" to="/abroad" activeStyle={activeStyle} >Abroad</NavLink>

                <InputGroup className="p-1 w-25 search">
                    <FormControl
                        placeholder="search your course"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <Button className="search-btn" variant="outline-secondary" id="button-addon2">
                        Search
                    </Button>
                </InputGroup>



            </div>


        </div>

    );
};

export default Header;