import React from 'react';

class Story extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            story: props.story
        }
    }



    render() {
    return (
        <div className='story-container'>
            <div className='story-header'>
                <div className='author-img-container'>
                    <img className='author-img' src={this.props.story.imageurl} alt='Author Image' />
                </div>
                <h4>{this.props.story.title}</h4>
                <h6>By: {this.props.story.name}</h6>
                <div className='story-content'>
                    <p>{this.props.story.story}</p>
                    <a>Read More</a>
                </div>
            </div>
        </div>
    )
}
}

export default Story;