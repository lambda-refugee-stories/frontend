import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Collapse } from 'reactstrap';

class EachSubmission extends React.Component {
    constructor(props) {
        super(props);
        this.toggleCollapse = this.toggleCollapse.bind(this);
        this.state = {
            story: props.story,
            collapse: false
        }
    }

    toggleCollapse() {
        this.setState(state => ({
            collapse: !state.collapse
        }))
    }



    render() {
        return (
            <div className='story-container'>
                
                    <div className='story-header'>
                        <div className='author-img-container'>
                            <img className='author-img' src={this.props.story.imageurl} alt='Author' />
                        </div>
                        <h4>{this.props.story.title}</h4>
                        <h6>By: {this.props.story.name}</h6>
                        <Collapse isOpen={this.state.collapse}>
                        <div className='story-content'>
                            <p>{this.props.story.story}</p>
                            
                        </div>
                        </Collapse>
                    </div>
                    
                    <a onClick={this.toggleCollapse}>Read This Story</a>
            </div >
        )
    }
}

export default EachSubmission;