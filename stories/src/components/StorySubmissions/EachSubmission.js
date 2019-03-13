import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

class EachSubmission extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            story: props.story,
        }
    }

    render() {
        return (
            <div className='story-container'>
                <div className='story-header'>
                    <div className='author-img-container'>
                        <img className='author-img' src={this.props.story.imageurl} alt='Author' style={{maxHeight: "200px"}} />
                    </div>
                    <h4>{this.props.story.title}</h4>
                    <h6>By: {this.props.story.name}</h6>
                    <p>{this.props.story.story}</p>
                </div>

                <div className='approval'>
                    <i class="far fa-check-circle"></i>
                    <i class="far fa-times-circle"></i>
                </div>
            </div >
        )
    }
}

export default EachSubmission;