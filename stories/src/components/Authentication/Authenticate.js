import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

axios.defaults.baseURL = 'https://refugee-stories-backend-rkolk.herokuapp.com/';



axios.interceptors.request.use(
    function(options) {
        options.headers.authorization = localStorage.getItem('jwt');

        return options;
    },

    function(error) {
        console.log(error);
        return Promise.reject(error);
    }
);

export default function(Component) {
    return class Authenticate extends React.Component {
        render() {
            const token = localStorage.getItem('jwt');
            const notLoggedIn = <div>Please <Link to="/login">log in</Link> to access story submissions.</div>;

            return <> {token ? <Component {...this.props} /> : notLoggedIn} </>;
        }
    };
}