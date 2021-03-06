// import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
// import {
//     Container,
//     Form,
//     FormControl,
//     Nav,
//     Navbar,
//     NavDropdown,
// } from 'react-bootstrap';

const Home = () => {
    return (
        <div className="back-img text-white pt-5 d-flex align-items-center justify-content-center">
            <div className="text text-center">
                <h1>Welcome To Meal Db </h1>
                <h3>
                    If you want meal Please, click the meal button and find the
                    meal you want
                </h3>
                <div>
                    <Link to="/meal">
                        <button className="btn btn-primary fs-3 mt-3">
                            Click For Meal
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
