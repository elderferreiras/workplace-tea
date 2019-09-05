import React, { Fragment } from 'react';
import {getDate} from "../../../helpers/utils";

const comment = (props) => {
    const author = props.author === 'administrator'? <b>{props.author}</b> : props.author;
    return (
        <Fragment>
            <div className="post-preview">
                <h3 className="post-subtitle">
                  {props.comment}
                </h3>
                <div className="row text-left">
                    <div className="col-12">
                        <p className="post-meta">Posted by {author} on {getDate(props.date)}
                        </p>
                    </div>
                </div>
            </div>
            {props.index === (props.total - 1)? null : <hr/>}
        </Fragment>
    );
};

export default comment;