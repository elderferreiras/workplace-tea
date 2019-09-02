import React from 'react';
import Spinner from "react-bootstrap/Spinner";

const loadingTeas = () => {
    return (
        <div className="post-preview text-center">
            <Spinner animation="border" role="status" className="text-info">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>
    );
};

export default loadingTeas;