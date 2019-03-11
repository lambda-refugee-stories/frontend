import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <div className="App">
                <h1>Refugee Stories</h1>
                <div>
                    <Link to="#">Home</Link>
                </div>
                <div>
                    <Link to="/">Stories</Link>
                </div>
                <div>
                    <Link to="/login">Admin Login</Link>
                </div>
                <div>
                    <Link to="/submissions">Submissions</Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;