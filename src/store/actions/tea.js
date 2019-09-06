import * as actionTypes from "./actionTypes";
import {API, graphqlOperation} from "aws-amplify";
import {getTea} from "../../graphql/queries";
import * as mutations from "../../graphql/mutations";
const uuidv4 = require('uuid/v4');

export const fetchTeaStart = () => {
    return {
        type: actionTypes.FETCH_TEA_START
    }
};

export const fetchTeaFail = (err) => {
    return {
        type: actionTypes.FETCH_TEA_FAIL,
        error: err
    }
};

export const fetchTeaSuccess = (tea) => {
    return {
        type: actionTypes.FETCH_TEA_SUCCESS,
        tea: tea
    }
};


export const fetchTea = (id) => {
    return (dispatch) => {
        dispatch(fetchTeaStart());
        API.graphql(graphqlOperation(getTea, {id: id})).then(res => {
            dispatch(fetchTeaSuccess(res.data.getTea));
        }).catch(err => {
            dispatch(fetchTeaFail(err));
        });
    }
};

export const createCommentSuccess = (tea) => {
    return {
        type: actionTypes.CREATE_COMMENT_SUCCESS,
        tea: tea
    };
};

export const createComment = (content, author, teaId, ip = null) => {
    return (dispatch) => {
        const data = {
            input: {
                content: content,
                author: author,
                commentTeaId: teaId,
                ip: ip
            }
        };

        if (ip) {
            data.input.ip = ip;
        }

        API.graphql(graphqlOperation(mutations.createComment, data)).then(res => {
            dispatch(createCommentSuccess(res.data.createComment.tea));
        });
    }
};

export const loadComment = (tea) => {
    return {
        tea: tea,
        type: actionTypes.LOAD_FAKE_COMMENT
    }
};

export const loadInappropriateComment = (comment, tea, author) => {
    return (dispatch) => {
        dispatch(loadComment({
            ...tea,
            comments: {
                items: tea.comments.items.concat({
                    id: uuidv4(),
                    content: comment,
                    author: author,
                    createdAt: '2019-09-06T02:11:16.789Z'
                })
            }
        }));
    }
};
