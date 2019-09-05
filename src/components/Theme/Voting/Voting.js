import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

const hasVoted = (id, dir) => {
    const vote = sessionStorage.getItem(id);
    if (vote) {
        return vote === dir;
    } else {
        return false;
    }
};

const checkVote = (id, dir) => {
    return hasVoted(id, dir)? ' selected' : ''
};

const voting = (props) => {
    return (
        <Fragment>
            <button type="button"
                    className={"btn btn-outline-dark mr-1" + checkVote(props.id, 'up')}
                    data-id={props.id} data-value={props.up}
                    data-thumbs={"up"}
                    onClick={() => props.countUpVote(props.id, props.up, props.down)}>
                <span className="font-weight-light">{props.up}</span>
                <i className="far fa-thumbs-up"/>
            </button>
            <button type="button"
                    className={"btn btn-outline-dark" + checkVote(props.id, 'down')}
                    data-id={props.id} data-value={props.down}
                    data-thumbs={"down"}
                    onClick={() => props.countDownVote(props.id, props.up, props.down)}>
                <span className="font-weight-light">{props.down}</span>
                <i className="far fa-thumbs-down"/>
            </button>
        </Fragment>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        countUpVote: (id, countUp, countDown) => dispatch(actions.countUpVote(id, countUp, countDown)),
        countDownVote: (id, countUp, countDown) => dispatch(actions.countDownVote(id, countUp, countDown))
    };
};

export default connect(null, mapDispatchToProps)(voting);