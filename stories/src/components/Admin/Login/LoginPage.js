import React from 'react';
// import axios from 'axios';

class LoginPage extends React.Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
            error: '',
        }
    }

    componentDidMount() {
        // axios
        //     .get('https://refugee-stories-backend-rkolk.herokuapp.com/login')
        
        //     .then(response => {
        //         console.log(response)
        //         this.setState({
        //             username: user,
        //             password: pw,
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

    login = (event) => {
        const user = this.state.username;
        const pw = this.state.password;

        if(user.length !== 0 || pw.length !==0){
            this.props.history.push('/submissions');
        }
        
        else{
            event.preventDefault();
            alert("All fields are required.");
        }
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
                    
                    <button onClick={this.login}>Login</button>
                </form>
            </div>
        );
    }
}

export default LoginPage;