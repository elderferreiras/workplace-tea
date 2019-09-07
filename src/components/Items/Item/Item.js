import React, {Fragment, Component} from 'react';
import Voting from '../../Voting/Voting';
import {Link} from "react-router-dom";
import {getDate} from "../../../helpers/utils";

class Item extends Component {
    render() {
        return (
            <Fragment>
                <div id={this.props.id} className="post-preview">
                    <div className="row text-left">
                        <div className="col-12">
                            <p className="post-meta">
                               Posted on {getDate(this.props.createdAt)}
                            </p>
                        </div>
                    </div>
                    <h3 className="post-subtitle">
                        {this.props.content}
                    </h3>
                    <div className="row text-left">
                        <div className="col-6">
                            <Voting
                                up={this.props.up ? this.props.up : 0}
                                down={this.props.down ? this.props.down : 0}
                                id={this.props.id}
                            />
                        </div>
                        <div className="col-6 text-right">
                            <p className="post-meta">
                                <Link to={"/tea/" + this.props.id}>
                                    {this.props.comments.length} {this.props.comments.length === 1? ' Comment' : ' Comments'}
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
                <hr/>
            </Fragment>
        );
    }
}

export default Item;