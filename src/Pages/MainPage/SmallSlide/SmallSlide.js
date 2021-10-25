import React from 'react';
import smSlide from  '../../../Items/Slide/smslide.png';
import './SmallSlide.scss'

const SmallSlide = () => {
    return (
        <div className='smallSlide'>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner" >
                    <div className="carousel-item active">
                        <img src={smSlide} className="d-block w-60 m-auto" alt="..."/>
                        <div className ="carousel-caption d-none d-md-block">
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL6ip-KNlx-rzLZ_Tu16ZC8QuUbOkdJ7af0g&usqp=CAU" className="d-block w-60 m-auto" alt="..."/>
                        <div className ="carousel-caption d-none d-md-block">
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdTWJn0xzPy9aRzb_j0e9GqtZXRbh48LRVWA&usqp=CAU" className="d-block w-60 m-auto" alt="..."/>
                        <div className ="carousel-caption d-none d-md-block">
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default SmallSlide;