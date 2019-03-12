import React from 'react';
import { Link } from 'react-router-dom';

const token = localStorage.getItem('jwt');

const NavBar = props => {
    return (
        <div>
            <div className="App">
                <h1>Refugee Stories</h1>
                
                <div>
                    <a href="https://mystifying-jennings-1ac73b.netlify.com/">Home</a>
                </div>

                <div>
                    <Link to="/">Stories</Link>
                </div>

                <div style={token ? {display: 'none'} : null}>
                    <Link to="/submit">Submit Your Story</Link>
                </div>

                <div style={token ? {display: 'none'} : null}>
                    Admin Only: <Link to="/login">Log In</Link>
                </div>

                <div style={token ? null : {display: 'none'}}>
                    <Link to="/submissions">Submissions</Link>
                </div>

                <div style={token ? null : {display: 'none'}}>
                    <Link to="/" onClick={props.logout}>Log Out</Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;