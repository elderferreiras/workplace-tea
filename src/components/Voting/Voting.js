import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import * as votingType from '../../store/actions/voting';
import { checkVote } from '../../utility/utility';

const voting = (props) => {
    return (
        <Fragment>
            <button type="button"
                    className={"btn btn-outline-dark mr-1" + checkVote(props.id, votingType.UP)}
                    onClick={() => props.countUpVote(props.id, props.up, props.down)}>
                <span className="font-weight-light">{props.up}</span>
                <i className="far fa-thumbs-up"/>
            </button>
            <button type="button"
                    className={"btn btn-outline-dark" + checkVote(props.id, votingType.DOWN)}
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