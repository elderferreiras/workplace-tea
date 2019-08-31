import React, { Component } from 'react';
import Layout from '../../../hoc/Layout';
import Header from '../../../hoc/Header';
import TeaBackground from '../../../assets/images/background.png'
import Comments from '../../../components/Comments/Comments';
import Pagination from '../../../components/Theme/Pagination/Pagination';
import { getDate } from '../../../helpers/utils';
import CommentForm from '../../../components/Comments/CommentForm/CommentForm';

class Tea extends Component {
    state = {
        tea: {
            content: "I hate my job.",
            date: "2019-08-30T00:54:59.568Z",
            upVotes: 3,
            downVotes: 4,
            comments: [
                {
                    comment: "Hahaha me to",
                    date: "2019-08-29T00:54:59.568Z",
                    author: "jupiter"
                },
                {
                    comment: "You nasty",
                    date: "2019-08-29T00:54:59.568Z",
                    author: "pluto"
                }
            ]
        }
    };
    render() {
        return (
            <Layout>
                <Header backgroundImage={TeaBackground} page="post">
                    <h2 className="subheading">{this.state.tea.content}</h2>
                    <span className="meta">Posted on {getDate(this.state.tea.date)}</span>
                </Header>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <h2>Comments:</h2>
                            <Comments comments={this.state.tea.comments}/>
                            <CommentForm/>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Tea;