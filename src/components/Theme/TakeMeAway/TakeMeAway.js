import React from 'react';
import { withRouter } from "react-router-dom";

const TakeMeAway = (props) => {
    const takeMeAwayHandler = () => {
        props.history.push('/');
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                    <button className="btn btn-outline-secondary mt-5" type="button" onClick={takeMeAwayHandler}><i
                        className="fas fa-arrow-left"/> Take Me Away From Here
                    </button>
                </div>
            </div>
        </div>
    );
};

export default withRouter(TakeMeAway);