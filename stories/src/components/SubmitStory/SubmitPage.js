import React from 'react';
import axios from 'axios';
import SubmitForm from './SubmitForm';

class SignUpPage extends React.Component {
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
        }
    }

    handleChanges = event => {
        this.setState({
            submission: {
                ...this.state.submission,
                [event.target.name]: event.target.value
            }
        });
    };

    submitStory = (event) => {
        event.preventDefault();
        axios
            .post('https://refugee-stories-backend-rkolk.herokuapp.com/submitstory', this.state.submission)

            .then(response => {
                console.log(response);
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
            </div>
        );
    }
}

export default SignUpPage;