import React, {Component, Fragment} from 'react';
import Layout from '../../hoc/Layout';
import Header from '../../hoc/Header';
import TeaBackground from '../../assets/images/background.png'
import CommentsSection from '../../components/Comments/CommentSection/CommentsSection';
import {getDate} from '../../helpers/utils';
import Spinner from '../../components/Theme/Spinner/Spinner';
import randomGenerator from 'random-username-generator';
import {connect} from 'react-redux';
import * as actions from '../../store/actions';
import axios from "axios";
import {validate} from "../../utility/utility";
import Error from '../../components/Theme/Error/Error';
import TakeMeAway from "../../components/Theme/TakeMeAway/TakeMeAway";

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
            if (this.isCommentValid(this.state.comment)) {
                axios.get('https://api.ipify.org/?format=json').then(res => {
                    if (res.data.ip.length) {
                        this.createComment(res.data.ip);
                    } else {
                        this.loadFakeComment();
                    }
                }).finally(res => {
                    this.setState({comment: "", submittingComment: false, valid: false});
                }).catch(err => {
                    this.createComment();
                });
            } else {
                this.loadFakeComment();
            }

        }
    };

    submitGIFCommentHandler = (url) => {
        const content = `<img src="${url}" class="comment-gif"/>`;

        this.setState({submittingComment: true});

        axios.get('https://api.ipify.org/?format=json').then(res => {
            this.createComment(res.data.ip, content);
        }).finally(res => {
            this.setState({comment: "", submittingComment: false, valid: false});
        });
    };

    createComment = (ip = null, content = this.state.comment) => {
        this.props.createComment(
            content,
            randomGenerator.generate().toLowerCase(),
            this.props.tea.id,
            ip
        );
    };

    loadFakeComment = () => {
        this.props.loadInappropriateComment(this.state.comment, this.props.tea, randomGenerator.generate().toLowerCase());
        this.setState({comment: "", submittingComment: false, valid: false});
    };

    isCommentValid = (content) => {
        return validate(content, {
            empty: true,
            profanity: true,
            consecutive: true,
            ascii: true,
            tea: this.props.tea
        });
    };

    changeCommentHandler = (event) => {
        if (event.target.value.length > 0 && event.target.value.length <= 500) {
            this.setState({comment: event.target.value, valid: true});
        } else {
            this.setState({comment: event.target.value, valid: false});
        }
    };

    render() {
        if (this.props.blocked) {
            return <p>Sorry, mate. You've been banned.</p>;
        } else {
            return (
                <Layout>
                    <Header backgroundImage={TeaBackground} page="post">
                        {this.props.tea ?
                            <Fragment>
                                <div className="row">
                                    <div className="col-12">
                                            <span className="meta"
                                                  style={{fontSize: '16px'}}>Posted on {getDate(this.props.tea.createdAt)}</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <h2 className="subheading">{this.props.loading ?
                                            <Spinner/> : this.props.tea.content}</h2>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 text-right">
                                            <span className="font-weight-light mr-2"
                                                  style={{fontSize: '16px'}}>{this.props.tea.up}</span>
                                        <i className="far fa-thumbs-up" style={{fontSize: '16px'}}/>

                                        <span className="font-weight-light ml-2 mr-2"
                                              style={{fontSize: '16px'}}>{this.props.tea.down}</span>
                                        <i className="far fa-thumbs-down" style={{fontSize: '16px'}}/>
                                    </div>
                                </div>
                            </Fragment> : <Error/>}
                    </Header>
                    {this.props.tea && this.props.error === null?
                        (this.props.loading ? <Spinner/> :
                            <CommentsSection
                                comments={this.props.tea.comments.items}
                                submit={this.submitCommentHandler}
                                submitGIF={this.submitGIFCommentHandler}
                                changed={this.changeCommentHandler}
                                comment={this.state.comment}
                                submitting={this.state.submittingComment}
                                valid={this.state.valid}/>)
                        : (this.props.error?
                           <TakeMeAway/>: <Spinner/>)}
                </Layout>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        tea: state.teaReducer.tea,
        loading: state.teaReducer.loading,
        error: state.teaReducer.error,
        blocked: state.teasReducer.blocked
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getTea: (id) => dispatch(actions.fetchTea(id)),
        createComment: (content, author, teaId, ip) => dispatch(actions.createComment(content, author, teaId, ip)),
        isIPBlocked: () => dispatch(actions.isIPBlocked()),
        blockIP: (ip) => dispatch(actions.blockIP(ip)),
        loadInappropriateComment: (comment, tea, author) => dispatch(actions.loadInappropriateComment(comment, tea, author))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tea);
