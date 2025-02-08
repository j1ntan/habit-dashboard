import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px', color:'white'}}>
            <h1>Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <Link to="http://localhost:5173/login">Go to Login</Link>
        </div>
    );
};

export default NotFound;