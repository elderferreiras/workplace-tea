import React from 'react';
import {Spinner} from 'react-bootstrap';

const commentForm = (props) => {
    return (
        <div className="row bg-light">

            {!props.submitting ?
                <div className="col-lg-12 mx-auto">
                    <form name="sentMessage" id="contactForm" noValidate onSubmit={props.submit}>
                        <div className="control-group">
                            <div className="form-group floating-label-form-group controls">
                                <label>Comment</label>
                                <textarea
                                    rows="3"
                                    className="form-control comment"
                                    placeholder="Comment"
                                    id="comment"
                                    required
                                    value={props.comment}
                                    onChange={props.changed}
                                />
                            </div>
                        </div>
                        <br/>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary"
                                    id="sendMessageButton">Submit
                            </button>
                        </div>
                    </form>
                </div> :
                <div className="col-lg-12 mx-auto text-center">
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>}
        </div>
    );
};

export default commentForm;