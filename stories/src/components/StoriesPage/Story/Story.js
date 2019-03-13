import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Collapse, Modal } from 'reactstrap';

class Story extends React.Component {
    constructor(props) {
        super(props);
        this.toggleCollapse = this.toggleCollapse.bind(this);
        this.state = {
            story: props.story,
            collapse: false,
            buttonText: 'Read This Story'
        }
    }

    toggleCollapse() {
        this.setState(state => ({
            collapse: !state.collapse,
        }))
        if (!this.state.collapse) {
            this.setState(state => ({
                buttonText: 'Close This Story'
            }))
            
        } else {
            this.setState(state => ({ 
                buttonText: 'Read This Story'
            }))
        }
    }



    render() {
        return (
            <div className='story-container'>

                <div className='story-header'>
                    <div className='author-img-container'>
                        <img className='author-img' src={this.props.story.imageurl} alt='Author Image' />
                    </div>
                    <div className="header-text-content">
                        <h4>{this.props.story.title}</h4>
                        <h6>By: {this.props.story.name}</h6>
                    </div>
                </div>
                <Collapse isOpen={this.state.collapse}>
                    <div className='story-content'>
                        <p>{this.props.story.story}</p>
                    </div>

                </Collapse>


                <button onClick={this.toggleCollapse}>{this.state.buttonText}</button>
            </div >
        )
    }
}

export default Story;