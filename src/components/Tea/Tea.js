import React, {Fragment} from 'react';
import Voting from '../Theme/Voting/Voting';

const tea = () => {
    return (
        <Fragment>
            <div className="post-preview">
                <a href="post.html">
                    <h3 className="post-subtitle">
                        Problems look mighty small from 150 miles up
                    </h3>
                </a>
                <div className="row text-left">
                    <div className="col-6">
                        <p className="post-meta">Posted on September 24, 2019</p>
                    </div>
                    <div className="col-6 text-right">
                        <Voting/>
                    </div>
                </div>
            </div>
            <hr/>
        </Fragment>
    );
};

export default tea;