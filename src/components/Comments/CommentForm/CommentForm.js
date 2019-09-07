import React, {Component} from 'react';
import GIFSearch from '../../GIF/GIFSearch/GIFSearch';
import GIF from '../../GIF/GIF';
import {Spinner} from 'react-bootstrap';
import axios from 'axios';

const commentType = {
    TEXT: 'TEXT',
    GIF: 'GIF'
};

class CommentForm extends Component {
    state = {
        commentType: commentType.TEXT,
        gifs: []
    };

    searchChangeHandler = () => {
        const value = document.querySelector("#gif-search").value;
        this.getGIFs(value);
    };

    getGIFs = (term) => {
        if(term.length > 0) {
            axios.get(`http://api.giphy.com/v1/gifs/search?q=${term}&api_key=zXXCerj107LK03q2wzA0vuN3MQvIi5iH`).then(res => {
                if (res.data.data && res.data.data.length <= 0) {
                    this.setState({gifs: []})
                } else if (res.data.data && res.data.data.length >= 10) {
                    this.setState({gifs: res.data.data.splice(0, 10)});
                } else if (res.data.data && res.data.data.length > 0 && res.data.data.length < 10){
                    this.setState({gifs: res.data.data.splice(0, res.data.data.length)});
                }
            });
        } else {
            this.setState({gifs: []})
        }
    };

    switchToGifHandler = () => {
        this.setState({commentType: commentType.GIF});
    };

    switchToTextHandler = () => {
        this.setState({commentType: commentType.TEXT, gifs: []});
    };

    selectGIFHandler = (url, e) => {
        e.preventDefault();
        this.switchToTextHandler();
        this.props.submitGIF(url)
    };

    render() {
        const disabled = this.props.valid ? '' : 'disabled';

        let commentForm = (<div className="control-group">
            <div className="form-group floating-label-form-group controls">
                <label>Comment</label>
                <textarea
                    rows="3"
                    className="form-control comment"
                    placeholder="Comment"
                    id="comment"
                    required
                    value={this.props.comment}
                    onChange={this.props.changed}
                />
            </div>
        </div>);

        if (this.state.commentType === commentType.GIF) {
            commentForm = <GIF gifs={this.state.gifs} selected={this.selectGIFHandler}/>;
        }

        const hideSubmitBtn = this.state.commentType === commentType.GIF ? ' d-none' : '';

        return (
            <div className="row">

                {!this.props.submitting ?
                    <div className="col-lg-12 mx-auto">
                        <form name="sentMessage" id="contactForm" noValidate onSubmit={this.props.submit}
                              className="bg-light" style={{padding: "20px"}}>
                            {commentForm}
                            <br/>
                            <div className="form-group">
                                <button type="submit" className={"btn btn-primary" + hideSubmitBtn}
                                        id="sendMessageButton" disabled={disabled}>Submit
                                </button>

                                {this.state.commentType === commentType.GIF ?
                                    <GIFSearch switch={this.switchToTextHandler}
                                               changed={this.searchChangeHandler}/> :
                                    <button type="submit"
                                            className="ml-2 btn btn-dark"
                                            onClick={this.switchToGifHandler}><i className="fas fa-search"/> GIF
                                    </button>}

                            </div>
                        </form>
                    </div> :
                    <div className="col-lg-12 mx-auto text-center">
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    </div>}
            </div>
        );
    }
}

export default CommentForm;