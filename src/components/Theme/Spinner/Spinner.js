import React from 'react';
import {Spinner} from "react-bootstrap";

const spinner = () => {
    return (
        <div className="container">
            <div className="row text-center">
                <div className="col-lg-8 col-md-10 mx-auto">
                    <Spinner animation="border" role="status" className="text-info">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>
            </div>
        </div>
    );
};

export default spinner;