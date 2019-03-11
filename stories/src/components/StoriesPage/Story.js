import React from 'react';

function Story({ story }) {
    return (
        <div className='story-container'>
            <div className='story-header'>
                <div className='author-img-container'>
                    <img className='author-img' src={story.imageurl} alt='Author Image' />
                </div>
                <h4>{story.title}</h4>
                <h6>By: {story.name}</h6>
                <div className='story-content'>
                <p>{story.story}</p>
                </div>
            </div>

        </div>
    )
}

export default Story;