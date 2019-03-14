import React, { Component } from 'react';
import axios from 'axios';
import EachSubmission from './EachSubmission';
import authenticate from '../Authentication/Authenticate';

class SubmissionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submissions: [],
        };
    }
    
    componentDidMount() {
        axios
            .get('https://refugee-stories-backend-rkolk.herokuapp.com/submissions')

            .then(res => this.setState({ submissions: res.data }))
            
            .catch(err => console.error(err));
    }

    updateStory = (event, element) => {
        event.persist();
        
        axios
            .put(`https://refugee-stories-backend-rkolk.herokuapp.com/submissions/${element.id}`, element)

            .then(response => {
                console.log(response);
                window.location.reload();
            })

            .catch(err => {
                console.log(err);
            });
    }

    deleteStory = (event, element) => {
        event.preventDefault();

        axios
            .delete(`https://refugee-stories-backend-rkolk.herokuapp.com/submissions/${element.id}`)
        
            .then(response => {
                console.log(response);
                window.location.reload();
            })
        
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        const sorted = this.state.submissions.sort(function (a, b) {return a.id - b.id;});

        return (
            <div className='story-list-container'>
                <h2>Current Submissions</h2>

                {sorted.map(story => {
                    if (!story.isapproved) {
                        return (
                            <EachSubmission
                                key={story.id}
                                story={story}
                                updateStory={this.updateStory}
                                deleteStory={this.deleteStory}
                            />
                        )
                    }

                    else return null;
                })}

                <h2>Approved Submissions</h2>

                {sorted.reverse().map(story => {
                    if (story.isapproved) {
                        return (
                            <EachSubmission
                                key={story.id}
                                story={story}
                                updateStory={this.updateStory}
                                deleteStory={this.deleteStory}
                            />
                        )
                    }

                    else return null;
                })}
            </div>
        )
    }
}

export default authenticate(SubmissionPage);