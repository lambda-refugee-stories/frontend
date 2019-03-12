import React from 'react';
import axios from 'axios';

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
                this.props.history.push('/submissions');
            })

            .catch(err => {
                console.log(err)
                this.setState({ error: err })
            });
    };

    render(){
        return(
            <div>
                <h1>Login</h1>
                <form onSubmit={this.login} autoComplete="off">
                    <input
                        placeholder="username"
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChanges}
                    ></input>

                    <input
                        placeholder="password"
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChanges}
                    ></input>
                    
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }
}

export default LoginPage;