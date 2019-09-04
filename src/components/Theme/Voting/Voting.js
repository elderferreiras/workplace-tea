import React, {Fragment} from 'react';

const voting = (props) => {
    return (
        <Fragment>
            <button type="button"
                    className={"btn btn-outline-dark mr-1"}
                    data-id={props.id} data-value={props.up}
                    data-thumbs={"up"}>
                <span className="font-weight-light">{props.up}</span>
                <i className="far fa-thumbs-up"/>
            </button>
            <button type="button"
                    className={"btn btn-outline-dark"}
                    data-id={props.id} data-value={props.down}
                    data-thumbs={"down"}>
                <span className="font-weight-light">{props.down}</span>
                <i className="far fa-thumbs-down"/>
            </button>
        </Fragment>
    );
};

export default voting;