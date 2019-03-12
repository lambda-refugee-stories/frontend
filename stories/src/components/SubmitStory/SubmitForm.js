import React from 'react';

const SubmitForm = props => {
    return (
        <div>
            <form onSubmit={props.submitStory} autoComplete="off">
                <input
                    placeholder="Name"
                    type="text"
                    name="name"
                    value={props.submission.name}
                    onChange={props.handleChanges}
                ></input>

                <input
                    placeholder="Enter a title"
                    type="text"
                    name="title"
                    value={props.submission.title}
                    onChange={props.handleChanges}
                ></input>

                <input
                    placeholder="Paste image URL"
                    type="text"
                    name="imageurl"
                    value={props.submission.imageurl}
                    onChange={props.handleChanges}
                ></input>

                <input
                    placeholder="Enter Your Story Here"
                    type="text"
                    name="story"
                    value={props.submission.story}
                    onChange={props.handleChanges}
                ></input>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SubmitForm;