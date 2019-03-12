import React, { Component } from 'react';
import axios from 'axios';
import EachSubmission from './EachSubmission';



export default class SubmissionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stories: []
        };
    }
    
    componentDidMount() {
        axios
        .get('https://refugee-stories-backend-rkolk.herokuapp.com/submissions')
        .then(res => this.setState({ stories: res.data }))
        .catch(err => console.error(err));
    }


    render() {
        
        return (
            <div className='story-list-container'>
            <h2>Story List</h2>
            {this.state.stories.map(story => {
                if (!story.isapproved) {
                    return (
                        <EachSubmission key={story.id} story={story}/>
                    )
                }
                
                else return null;
            })}

            </div>
        )
    }
}
