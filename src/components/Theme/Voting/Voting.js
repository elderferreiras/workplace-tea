import React, {Fragment} from 'react';

const voting = (props) => {
    return (
        <Fragment>
            <button type="button" className="btn btn-outline-dark voting mr-1">{props.up}<i className="far fa-thumbs-up"/></button>
            <button type="button" className="btn btn-outline-dark voting">{props.down}<i className="far fa-thumbs-down"/></button>
        </Fragment>
    );
};

export default voting;