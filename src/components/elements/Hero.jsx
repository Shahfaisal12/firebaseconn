import React from 'react'
import { Button } from "@mui/material";
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="text-center">
                    <h1 className="fw-bold">Home Page</h1>
                    <h6>Please Login if you have already account, otherwise register your self</h6>
                    <Link to='/login'><Button className="fw-bold">Login</Button></Link> / <Link to='/register'><Button className="fw-bold">Register</Button></Link>
                </div>
            </div>
        </div>
    )
}

export default Hero