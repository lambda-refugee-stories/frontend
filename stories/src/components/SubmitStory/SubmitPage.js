import React from 'react';
import axios from 'axios';
import SubmitForm from './SubmitForm';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';

class SubmitPage extends React.Component {
    constructor(){
        super();
        this.state={
            submission:{
                name: '',
                title: '',
                imageurl: '',
                story: '',
            },
            error: '',
            modal: true,
        };

        this.toggleModal = this.toggleModal.bind(this);
    }

    handleChanges = event => {
        this.setState({
            submission: {
                ...this.state.submission,
                [event.target.name]: event.target.value
            }
        });
    };

    toggleModal() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    submitStory = (event) => {
        event.preventDefault();
        axios
            .post('https://refugee-stories-backend-rkolk.herokuapp.com/submitstory', this.state.submission)

            .then(response => {
                console.log(response);
                this.toggleModal();
                this.setState({
                    submission: {
                        name: '',
                        title: '',
                        imageurl: '',
                        story: '',
                    }
                })
            })

            .catch(err => {
                console.log(err);
                this.setState({ error: err });
            });
    };

    render(){
        return(
            <div>
                <h1>Tell the World Your Story</h1>
                <SubmitForm
                    submission={this.state.submission}
                    handleChanges={this.handleChanges}
                    submitStory={this.submitStory}
                />

                <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
                    <ModalHeader>Thank You!</ModalHeader>
                    <ModalBody>
                        Thank you for your submitting your story. An administrator will review your submission soon.
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary"><Link to='/'>View Stories</Link></Button>{' '}
                        <Button color="secondary" onClick={this.toggleModal}>Submit Another Story</Button>
                    </ModalFooter>
                </Modal>
            </div>

        );
    }
}

export default SubmitPage;