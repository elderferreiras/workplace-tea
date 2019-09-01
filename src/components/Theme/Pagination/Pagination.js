import React from 'react';

const pagination = (props) => {
    return (
        <div className="clearfix">
            <button className="btn btn-primary float-right" onClick={props.next}>Older &rarr;</button>
        </div>
    );
};

export default pagination;