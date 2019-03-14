import React from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';

class SignUpPage extends React.Component {
    constructor(){
        super();
        this.state = {
            credentials: {
                username: '',
                password: '',
            },
            confirmPass: '',
            error: '',
            
            modal: false,
        };

        this.toggleModal = this.toggleModal.bind(this);
    }

    handleChanges = event => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [event.target.name]: event.target.value
            }
        });
    };

    handleConfirmPassChanges = event => {
        this.setState({
            confirmPass: event.target.value,
        })
    }
    

    toggleModal() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    signUp = (event) => {
        event.preventDefault();
        if (this.state.credentials.password !== this.state.confirmPass) {
            alert("Passwords don't match");
        } else {
            axios
            .post('https://refugee-stories-backend-rkolk.herokuapp.com/signup', this.state.credentials)

            .then(response => {
                console.log(response);
                localStorage.setItem('jwt', response.data.token)
                this.toggleModal();
            })

            .catch(err => {
                console.log(err);
                this.setState({ error: err });
            });
        }
    };

    render(){
        return(
            <div className='signup-page'>
                <h1>Administrator Sign Up</h1>
                <form
                    onFocus={event=> event.target.placeholder=""}
                    onBlur={event=> event.target.placeholder=event.target.name}
                    className='signup-form'
                    onSubmit={this.signUp}
                    autoComplete="off"
                >
                    <input
                        className='signup-input'
                        placeholder="username"
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChanges}
                    ></input>

                    <input
                        className='signup-input'
                        placeholder="password"
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChanges}
                    ></input>

                    <input
                        className='signup-input'
                        placeholder="confirm password"
                        type="password"
                        name="confirm password"
                        value={this.state.confirmPass}
                        onChange={this.handleConfirmPassChanges}
                    ></input>
                    
                    <button type="submit">Sign Up</button>
                </form>

                <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
                    <ModalHeader>Congratulations!</ModalHeader>
                    <ModalBody>
                        Congratulations on signing up for Refugee Stories. You are now signed up and logged in.
                        For now, you will not be able to see the submissions on the submissions page.
                        If approved, an administator will give you the rights to view and edit submissions.
                        Thank you for your patience. Please feel free to view the published stories in the meantime.
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary"><Link to='/'>View Stories</Link></Button>{' '}
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default SignUpPage;