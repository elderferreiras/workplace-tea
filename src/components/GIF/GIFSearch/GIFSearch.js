import React, {Fragment} from 'react';
import debounce from 'lodash.debounce';
import './GIFSearch.scss';

const gif = (props) => {
    return (
        <Fragment>
            <div className="btn btn-dark GIFSearch">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1"><i className="fas fa-search"/></span>
                    </div>
                    <input type="text" className="form-control" id="gif-search" placeholder="Search for a GIF..."
                           aria-describedby="basic-addon1" onChange={debounce(props.changed, 1000)}/>
                    <div className="input-group-append">

                        <button type="button" className="btn btn-danger" onClick={props.switch}>
                            <i className="fas fa-times"/>
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default gif;