import React, {Fragment} from 'react';
import Voting from '../../Theme/Voting/Voting';
import {Link} from "react-router-dom";
import {getDate} from "../../../helpers/utils";

const item = (props) => {
    return (
        <Fragment>
            <div className="post-preview">
                <h3 className="post-subtitle">
                   {props.content}
                </h3>
                <div className="row text-left">
                    <div className="col-8">
                        <p className="post-meta">
                            <Link to="/tea/1">
                                Posted on {getDate(props.date)}
                            </Link>
                        </p>
                    </div>
                    <div className="col-4 text-right">
                        <Voting up={props.up} down={props.down}/>
                    </div>
                </div>
            </div>
            <hr/>
        </Fragment>
    );
};

export default item;