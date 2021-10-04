import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="d-flex justify-content-evenly mb-5">
            <div >
                <h3>Contacts</h3>
                <h6>Email: course@mail.com</h6>
                <h6>+88 019 003 2154</h6>
            </div>
            <div>
                <h3>Last Update</h3>
                <h6>Provide online course</h6>
                <small>start from December 15, 2021</small>
            </div>
            </div>
            <div className="d-flex justify-content-between mt-5">
                <p>Terms of use | Privacy Policy</p>
                <p>Copyright © 2021, All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;