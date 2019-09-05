import * as actionTypes from "./actionTypes";
import {API, graphqlOperation} from "aws-amplify";
import {getTea} from "../../graphql/queries";
import * as mutations from "../../graphql/mutations";
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

export const createComment = (content, author, teaId, ip) => {
    return (dispatch) => {
        API.graphql(graphqlOperation(mutations.createComment, {
            input: {
                content: content,
                author: author,
                commentTeaId: teaId,
                ip: ip
            }
        })).then(res => {
           dispatch(createCommentSuccess(res.data.createComment.tea));
        });
    }
};
