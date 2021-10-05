import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        // footer
        <div className="footer">
            <h5 className="footer-name">Abroad <span>Higher Study  Preparation</span></h5>
            <h6>Contact with us</h6>
            <p>higherstudy@gmail.com</p>
            <a href=""> <i class="fab fa-facebook-square icon"></i></a>
            <a href=""><i class="fab fa-linkedin icon"></i></a>
            <a href=""><i class="fab fa-youtube icon"></i></a>
            <a href=""><i class="fas fa-phone-square-alt icon"></i></a>
            <p className="pb-3 mt-3"><small> © Copyright 2021 by Abroad Higher Study Preparation </small></p>
        </div>
    );
};

export default Footer;