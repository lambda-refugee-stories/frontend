import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Story from '../Story/Story';

export default class StoryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stories: []
        };
    }
    
    componentDidMount() {
        axios
        .get('https://refugee-stories-backend-rkolk.herokuapp.com/stories')
        .then(res => this.setState({ stories: res.data }))
        .catch(err => console.error(err));
    }


    render() {
        
        return (
            <div className='story-list-container'>
            <h2>Story List</h2>
            {this.state.stories.reverse().map(story => {
                if (story.isapproved) {
                    return (
                        <Story key={story.id} story={story}/>
                    )
            }})}


            </div>
        )
    }
}
