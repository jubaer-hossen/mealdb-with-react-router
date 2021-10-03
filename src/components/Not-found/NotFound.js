import React from 'react';
import { Link } from 'react-router-dom';
import './Not-found.css';

const NotFound = () => {
    return (
        <div>
            <div className="error-img text-center text-danger mt-5 pt-5">
                <Link to="/home">
                    <button className="btn btn-success fs-1">Go Home</button>
                </Link>
            </div>
            <div className="text-center mb-5 pb-5"></div>
        </div>
    );
};

export default NotFound;
