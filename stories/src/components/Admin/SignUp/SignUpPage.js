import React from 'react';
import axios from 'axios';

class SignUpPage extends React.Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
            admin: false,
            error: '',
        }
    }

    componentDidMount() {
        // axios
        //     .get('https://refugee-stories-backend-rkolk.herokuapp.com/signup')
        
        //     .then(response => {
        //         console.log(response)
        //         this.setState({
        //             username: this.state.username,
        //             password: this.state.password,
        //         })
        //     })
        
        //     .catch(err => {
        //         console.log(err)
        //         this.setState({ error: err })
        //     });
    }

    handleChanges = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    signUp = (event, element) => {
        const user = this.state.username;
        const pw = this.state.password;

        if(user.length !== 0 || pw.length !==0){
            event.preventDefault();

            axios
                .post('https://refugee-stories-backend-rkolk.herokuapp.com/signup', element)

                .then(response => {
                    console.log(response);
                    this.props.history.push('/submissions');
                })

                .catch(err => {
                    console.log(err);
                    this.setState({ error: err });
                });
        }
        
        else{
            event.preventDefault();
            alert("All fields are required.");
        }
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
                    
                    <button onClick={this.signUp}>Sign Up</button>
                </form>
            </div>
        );
    }
}

export default SignUpPage;