import React, {Component, Fragment} from 'react';
import Layout from '../../../hoc/Layout';
import Header from '../../../hoc/Header';
import TeaBackground from '../../../assets/images/background.png'
import CommentsSection from '../../../components/Comments/CommentSection/CommentsSection';
import { getDate } from '../../../helpers/utils';
import {API, graphqlOperation} from 'aws-amplify';
import { getTea } from '../../../graphql/queries';
import Spinner from '../../../components/Theme/Spinner/Spinner';
import * as mutations from '../../../graphql/mutations';
import randomGenerator from 'random-username-generator';

class Tea extends Component {
    state = {
        tea: null,
        comment: "",
        submittingComment: false
    };

    componentDidMount() {
        this.getTea();
    }

    getTea = () => {
        API.graphql(graphqlOperation(getTea, {id: this.props.match.params.id})).then(res => {
            this.setState({tea: res.data.getTea});
        });
    };

    submitCommentHandler = (event) => {
        event.preventDefault();

        if(this.state.comment.length) {
            this.setState({submittingComment: true});
            API.graphql(graphqlOperation(mutations.createComment, {input: {
                content: this.state.comment,
                author: randomGenerator.generate(),
                commentTeaId: this.state.tea.id
            }})).then(res => {
                this.getTea();
            }).finally(res => {
                this.setState({comment: "", submittingComment: false});
            });
        }
    };

    changeCommentHandler = (event) => {
        this.setState({comment: event.target.value});
    };

    render() {
        return (
            <Layout>
                <Header backgroundImage={TeaBackground} page="post">
                    { this.state.tea ?
                        <Fragment>
                            <h2 className="subheading">{this.state.tea.content}</h2>
                            <span className="meta">Posted on {getDate(this.state.tea.createdAt)}</span>
                        </Fragment> : null }
                </Header>
                { this.state.tea? <CommentsSection
                    comments={this.state.tea.comments.items}
                    submit={this.submitCommentHandler}
                    changed={this.changeCommentHandler}
                    comment={this.state.comment}
                    submitting={this.state.submittingComment}
                /> : <Spinner/>}
            </Layout>
        );
    }
}

export default Tea;