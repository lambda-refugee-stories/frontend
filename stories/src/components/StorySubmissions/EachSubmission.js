import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

class EachSubmission extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            story: props.story,
        }
    }

    toggleApproved = event => {
        this.setState({
            story: {
                ...this.state.story,
                isapproved: !this.state.story.isapproved
            }
        }, function () {
            this.props.updateStory(event, this.state.story);
        });
    }

    render() {
        return (
            <div className='sub-container'>
                <div className='sub-header'>
                    <div className='sub-img-container'>
                        <img className='sub-img' src={this.props.story.imageurl} alt='Author' style={{maxHeight: "200px"}} />
                    </div>

                    <h4 className='sub-title'>{this.props.story.title}</h4>

                    <h6 className='sub-name'>By: {this.props.story.name}</h6>

                    <p className='sub-story'>{this.props.story.story}</p>
                </div>

                <div className='approval'>
                    <i
                        className="fas fa-check"
                        onClick={this.toggleApproved}
                        style={this.state.story.isapproved ? { display: 'none' } : null}
                    ></i>

                    <i
                        className="fas fa-undo"
                        onClick={this.toggleApproved} 
                        style={this.state.story.isapproved ? null : { display: 'none' }}
                    ></i>

                    <i
                        className="far fa-trash-alt"
                        onClick={event => this.props.deleteStory(event, this.props.story)}
                    ></i>
                </div>
            </div >
        )
    }
}

export default EachSubmission;