import React from 'react';
import { Link } from 'react-router-dom';
import RSlogo from '../../assets/RSlogo.png';

const token = localStorage.getItem('jwt');

const NavBar = props => {
    return (
        <div className="navbar-wrapper">
            <div className="navbar-container">
                <div className='title'>
                    <div className="logo-container">
                        <img src={RSlogo} alt="logo"></img>
                    </div>
                    
                    <h1>Refugee Stories</h1>
                </div>

                <div className="link-container">


                    <div>
                        <a href="https://mystifying-jennings-1ac73b.netlify.com/" className="nav-text">Home</a>
                    </div>

                    <div>
                        <Link to="/" className="nav-text">Stories</Link>
                    </div>

                    <div style={token ? { display: 'none' } : null}>
                        <Link to="/submit" className="nav-text">Submit Your Story</Link>
                    </div>

                    <div style={token ? { display: 'none' } : null}>
                        Admin Only: <Link to="/login" className="nav-text">Log In</Link>
                    </div>

                    <div style={token ? null : { display: 'none' }}>
                        <Link to="/submissions" className="nav-text">Submissions</Link>
                    </div>

                    <div style={token ? null : { display: 'none' }}>
                        <Link to="/" onClick={props.logout} className="nav-text">Log Out</Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default NavBar;