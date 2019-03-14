import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class LoginPage extends React.Component {
    constructor(){
        super();
        this.state = {
            credentials: {
                username: '',
                password: '',
            },
            error: '',
        }
    }

    handleChanges = event => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [event.target.name]: event.target.value
            }
        });
    };

    login = (event) => {
        event.preventDefault();

        axios
            .post('https://refugee-stories-backend-rkolk.herokuapp.com/login', this.state.credentials)

            .then(response => {
                console.log(response)
                localStorage.setItem('jwt', response.data.token)
                window.location.reload();
                this.props.history.push('/submissions');
            })

            .catch(err => {
                console.log(err)
                this.setState({ error: err })
            });
    };

    render(){
        return(
            <div className="login-page">
                <h1>Administrator Login</h1>
                <form className="login-form"
                    onFocus={event=> event.target.placeholder=""}
                    onBlur={event=> event.target.placeholder=event.target.name}
                    onSubmit={this.login}
                    autoComplete="off"
                >
                    <input
                        className="login-input"
                        placeholder="username"
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChanges}
                    ></input>

                    <input
                        className="login-input"
                        placeholder="password"
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChanges}
                    ></input>
                    
                    <button type="submit">Login</button>
                </form>
                <p><span>Need to register as a user? </span><Link to="/signup">Sign Up</Link></p>
            </div>
        );
    }
}

export default LoginPage;