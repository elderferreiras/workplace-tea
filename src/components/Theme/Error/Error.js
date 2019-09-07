import React, { Fragment } from 'react';

const error = () => {
    return (
        <Fragment>
            <div className="row">
                <div className="col-12">
                    <h2 className="subheading">Not found: the tea you're looking for was cleaned right after being spilled.</h2>
                </div>
            </div>
        </Fragment>
    );
};

export default error;