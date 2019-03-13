import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

const EachSubmission = props => {
    return (
        <div className='story-container'>
            <div className='story-header'>
                <div className='author-img-container'>
                    <img className='author-img' src={props.story.imageurl} alt='Author' />
                </div>
                <h4>{props.story.title}</h4>
                <h6>By: {props.story.name}</h6>
                <p>{props.story.story}</p>
            </div>

            <div className='approval'>
                <i className="far fa-check-circle" onClick={event => props.updateStory(event, props.story)}></i>
                <i className="far fa-times-circle" onClick={event => props.deleteStory(event, props.story)}></i>
            </div>
        </div >
    )
}

export default EachSubmission;