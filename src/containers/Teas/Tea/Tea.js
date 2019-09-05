import React, {Component, Fragment} from 'react';
import Layout from '../../../hoc/Layout';
import Header from '../../../hoc/Header';
import TeaBackground from '../../../assets/images/background.png'
import CommentsSection from '../../../components/Comments/CommentSection/CommentsSection';
import {getDate} from '../../../helpers/utils';
import Spinner from '../../../components/Theme/Spinner/Spinner';
import randomGenerator from 'random-username-generator';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';
import axios from "axios";

class Tea extends Component {
    state = {
        comment: "",
        submittingComment: false,
        valid: false
    };

    componentDidMount() {
        this.props.isIPBlocked();
        this.props.getTea(this.props.match.params.id);
    }

    submitCommentHandler = (event) => {
        event.preventDefault();

        if (this.state.comment.length) {
            this.setState({submittingComment: true});

            axios.get('https://api.ipify.org/?format=json').then(res => {
                const ip = res.data.ip;

                if (this.isCommentValid(this.state.comment)) {
                    this.props.createComment(
                        this.state.comment,
                        randomGenerator.generate().toLowerCase(),
                        this.props.tea.id,
                        ip
                    );
                } else {
                    this.props.blockIP(ip);
                }
            }).finally(res => {
                this.setState({comment: "", submittingComment: false, valid: false});
            });
        }
    };

    isCommentValid = (content) => {
        if(content.length <= 0) {
            return false;
        }

        if (new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?").test(content)) {
            return false;
        }

        let Filter = require('bad-words'),
            filter = new Filter();

        filter.addWords('reddit', 'spilled', 'tea', 'script', 'farts', 'fart', 'lorem', 'ipsum');

        if(filter.isProfane(content)) {
            return false;
        }

        if(/[~`#$%\^&+=\-\[\]\\/{}|\\"<>\?]/g.test(content)) {
            return false
        }

        if(/(.)\1{2,}/.test(content)) {
            return false;
        }

        if (this.props.tea.comments.items.findIndex(comment => content === comment.content) !== -1) {
            return false;
        }

        return true;
    };

    changeCommentHandler = (event) => {
        if(event.target.value.length > 0 && event.target.value.length <= 500) {
            this.setState({comment: event.target.value, valid: true});
        } else {
            this.setState({comment: event.target.value, valid: false});
        }
    };

    render() {
        if(this.props.blocked) {
            return <p>Sorry, mate. You've been banned.</p>;
        } else {
            return (
                <Layout>
                    <Header backgroundImage={TeaBackground} page="post">
                        {this.props.tea ?
                            <Fragment>
                                <h2 className="subheading">{this.props.tea.content}</h2>
                                <span className="meta">Posted on {getDate(this.props.tea.createdAt)}</span>
                            </Fragment> : null}
                    </Header>
                    {this.props.tea ? <CommentsSection
                        comments={this.props.tea.comments.items}
                        submit={this.submitCommentHandler}
                        changed={this.changeCommentHandler}
                        comment={this.state.comment}
                        submitting={this.state.submittingComment}
                        valid={this.state.valid}
                    /> : <Spinner/>}
                </Layout>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        tea: state.teaReducer.tea,
        blocked: state.teasReducer.blocked
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getTea: (id) => dispatch(actions.fetchTea(id)),
        createComment: (content, author, teaId, ip) => dispatch(actions.createComment(content, author, teaId, ip)),
        isIPBlocked: () => dispatch(actions.isIPBlocked()),
        blockIP: (ip) => dispatch(actions.blockIP(ip))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tea);