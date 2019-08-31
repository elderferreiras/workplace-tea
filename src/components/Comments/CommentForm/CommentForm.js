import React from 'react';

const commentForm = () => {
    return (
        <div className="row bg-light">
            <div className="col-lg-12 mx-auto">
                <form name="sentMessage" id="contactForm" noValidate>
                    <div className="control-group">
                        <div className="form-group floating-label-form-group controls">
                            <label>Comment</label>
                            <textarea rows="3" className="form-control comment" placeholder="Comment"
                                      id="comment" required/>
                        </div>
                    </div>
                    <br/>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary"
                                id="sendMessageButton">Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default commentForm;