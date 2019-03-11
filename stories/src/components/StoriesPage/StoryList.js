import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Story from './Story';


const dummyData = [
    {
        name: 'James',
        id: 1,
        title: 'Story from James',
        imageurl: '#',
        story: 'story story story story story story story story story story story story story story story story story story story story story story story story',
        isapproved: true
    },
    {
        name: 'Nicole',
        id: 2,
        title: 'Story from Nicole',
        imageurl: '#',
        story: 'story story story story story story story story story story story story story story story story story story story story story story story story',
        isapproved: true
    },
    {
        name: 'Rachel',
        id: 3,
        title: 'Story from Rachel',
        imageurl: '#',
        story: 'story story story story story story story story story story story story story story story story story story story story story story story story',
        isapproved: true
    },
    {
        name: 'Daniela',
        id: 4,
        title: 'Story from Daniela',
        imageurl: '#',
        story: 'story story story story story story story story story story story story story story story story story story story story story story story story',
        isapproved: false
    },
    {
        name: 'Amarachi',
        id: 5,
        title: 'Story from Amarachi',
        imageurl: '#',
        story: 'story story story story story story story story story story story story story story story story story story story story story story story story',
        isapproved: false
    }

]



export default class StoryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stories: dummyData
        };
    }


    render() {
        
        return (
            <div className='story-list-container'>
            <h2>Story List</h2>
            {this.state.stories.map(story => {
                if (story.isapproved) {
                    return (
                        <Story key={story.id} story={story}/>
                    )
            }})}


            </div>
        )
    }
}
