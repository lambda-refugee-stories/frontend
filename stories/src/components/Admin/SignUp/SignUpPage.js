import React from 'react';
import axios from 'axios';

class SignUpPage extends React.Component {
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

    signUp = (event) => {
        event.preventDefault();
        axios
            .post('https://refugee-stories-backend-rkolk.herokuapp.com/signup', this.state.credentials)

            .then(response => {
                console.log(response);
                localStorage.setItem('jwt', response.data.token)
                window.location.reload();
                this.props.history.push('/submissions');
            })

            .catch(err => {
                console.log(err);
                this.setState({ error: err });
            });
    };

    render(){
        return(
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={this.signUp} autoComplete="off">
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
                    
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        );
    }
}

export default SignUpPage;