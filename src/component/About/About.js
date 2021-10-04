import React from 'react';
import {FaFacebookSquare, FaInstagramSquare} from 'react-icons/fa';
import {AiFillTwitterSquare} from 'react-icons/ai'

const About = () => {
    return (
        <div className='container mb-5 mt-5'>
          <div className="card mb-3" >
            <div className="row g-0 m-3">
                <div className="col-md-4">
                <img src="https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?size=626&ext=jpg" className="img-fluid rounded-circle" alt="..."/>
                </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Sara Saiyra's talk</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div className="d-flex gap-3 justify-content-center">
                        <FaFacebookSquare></FaFacebookSquare>
                        <FaInstagramSquare></FaInstagramSquare>
                        <AiFillTwitterSquare></AiFillTwitterSquare>
                        </div>
                    </div>
                    </div>
                </div>
            <div className="row g-0 m-3">
                <div className="col-md-4">
                <img src="https://st4.depositphotos.com/12982378/22072/i/600/depositphotos_220729084-stock-photo-smiling-adult-man-crossed-arms.jpg" className="img-fluid rounded-circle" alt="..."/>
                </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Arman rihan's talk</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div className="d-flex gap-3 justify-content-center">
                        <FaFacebookSquare></FaFacebookSquare>
                        <FaInstagramSquare></FaInstagramSquare>
                        <AiFillTwitterSquare></AiFillTwitterSquare>
                        </div>
                    </div>
                    </div>
                </div>
            <div className="row g-0 m-3">
                <div className="col-md-4">
                <img src="https://st3.depositphotos.com/1037987/15097/i/600/depositphotos_150975580-stock-photo-portrait-of-businesswoman-in-office.jpg" className="img-fluid rounded-circle" alt="..."/>
                </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Ozgi tolga's talk</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div className="d-flex gap-3 justify-content-center">
                        <FaFacebookSquare></FaFacebookSquare>
                        <FaInstagramSquare></FaInstagramSquare>
                        <AiFillTwitterSquare></AiFillTwitterSquare>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;