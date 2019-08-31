import React, {Fragment} from 'react';

const voting = () => {
    return (
        <Fragment>
            <button type="button" className="btn btn-outline-dark voting mr-1"><i className="far fa-thumbs-up"/></button>
            <button type="button" className="btn btn-outline-dark voting"><i className="far fa-thumbs-down"/></button>
        </Fragment>
    );
};

export default voting;