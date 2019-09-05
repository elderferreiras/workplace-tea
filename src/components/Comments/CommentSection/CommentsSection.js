import React from 'react';
import Comments from "../Comments";
import CommentForm from "../CommentForm/CommentForm";

const commentsSection = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                    {props.comments.length? <h2>Comments:</h2> : <h2>No comments.</h2> }

                    <Comments comments={props.comments}/>
                    <hr/>

                    <CommentForm
                        comment={props.comment}
                        submit={props.submit}
                        changed={props.changed}
                        submitting={props.submitting}
                        valid={props.valid}
                    />
                </div>
            </div>
        </div>
    );
};

export default commentsSection;