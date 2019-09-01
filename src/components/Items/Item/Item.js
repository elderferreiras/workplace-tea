import React, {Fragment, Component} from 'react';
import Voting from '../../Theme/Voting/Voting';
import {Link} from "react-router-dom";
import {getDate} from "../../../helpers/utils";

class Item extends Component {
    state = {
        up: '',
        down: ''
    };

    componentDidMount() {
       this.updateVotes();
    }

    upVoteHandler = (id) => {
        const current = sessionStorage.getItem(id);

        if(current && current.length) {
            if(current === 'up') {
                sessionStorage.removeItem(id);
                this.props.upHandler(id, 'SUBTRACT');
            } else {
                sessionStorage.setItem(id, 'up');
                this.props.upHandler(id, 'ADD', 'SUBTRACT');
            }
        } else {
            sessionStorage.setItem(id, 'up');
            this.props.upHandler(id, 'ADD');
        }

        this.updateVotes();
    };

    downVoteHandler = (id) => {
        const current = sessionStorage.getItem(id);

        if(current && current.length) {
            if(current === 'down') {
                sessionStorage.removeItem(id);
                this.props.downHandler(id, 'SUBTRACT');
            } else {
                sessionStorage.setItem(id, 'down');
                this.props.downHandler(id, 'ADD', 'SUBTRACT');
            }
        } else {
            sessionStorage.setItem(id, 'down');
            this.props.downHandler(id, 'ADD');
        }


        this.updateVotes();
    };

    updateVotes = () => {
        let upVoteSelected = "";
        let downVoteSelected = "";

        let vote = sessionStorage.getItem(this.props.id);

        if(vote && vote.length) {
            if(vote === 'up') {
                upVoteSelected = " selected";
            } else if (vote === 'down') {
                downVoteSelected = " selected";
            }
        }

        this.setState({up: upVoteSelected, down: downVoteSelected});
    };

    render () {
        return (
            <Fragment>
                <div className="post-preview">
                    <h3 className="post-subtitle">
                        {this.props.content}
                    </h3>
                    <div className="row text-left">
                        <div className="col-8">
                            <p className="post-meta">
                                <Link to={"/tea/" + this.props.id}>
                                    Posted on {getDate(this.props.createdAt)}
                                </Link>
                            </p>
                        </div>
                        <div className="col-4 text-right">
                            <Voting
                                up={this.props.up ? this.props.up : 0}
                                down={this.props.down ? this.props.down : 0}
                                id={this.props.id}
                                upVote={this.upVoteHandler}
                                downVote={this.downVoteHandler}
                                upSelected={this.state.up}
                                downSelected={this.state.down}
                            />
                        </div>
                    </div>
                </div>
                <hr/>
            </Fragment>
        );
    }
}

export default Item;