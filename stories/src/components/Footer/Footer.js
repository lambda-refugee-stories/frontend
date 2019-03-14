import React from 'react';
import { Link } from 'react-router-dom';

const token = localStorage.getItem('jwt');

function Footer(props) {
    return (
        <div className="footer-container">
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
                    <p>Admin Only: <Link to="/login" className="nav-text">Log In</Link></p>
                </div>

                <div style={token ? null : { display: 'none' }}>
                    <Link to="/submissions" className="nav-text">Submissions</Link>
                </div>

                <div style={token ? null : { display: 'none' }}>
                    <Link to="/" onClick={props.logout} className="nav-text">Log Out</Link>
                </div>
                <div className="copyright">
                    <h4>©Copyright Refugee Stories 2019</h4>
                </div>
            </div>
        </div>
    )
}


export default Footer;