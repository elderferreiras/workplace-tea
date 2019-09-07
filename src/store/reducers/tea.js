import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../../utility/utility";

const initialState = {
    tea: null,
    loading: false,
    error: null
};

const teaReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_TEA_START:
            return fetchTeaStart(state, action);
        case actionTypes.FETCH_TEA_SUCCESS:
            return fetchTeaSuccess(state, action);
        case actionTypes.FETCH_TEA_FAIL:
            return fetchTeaFail(state, action);
        case actionTypes.CREATE_COMMENT_START:
            return createCommentStart(state, action);
        case actionTypes.CREATE_COMMENT_SUCCESS:
            return createCommentSuccess(state, action);
        case actionTypes.CREATE_COMMENT_FAIL:
            return createCommentFail(state, action);
        case actionTypes.LOAD_FAKE_COMMENT:
            return loadFakeComment(state, action);
        default:
            return state;
    }
};

const fetchTeaStart = (state) => {
    return updateObject(state, {
        loading: true,
        error: null
    });
};

const fetchTeaSuccess = (state, action) => {
    return updateObject(state, {
        tea: action.tea,
        loading: false,
        loadingComment: false,
        error: null
    });
};

const fetchTeaFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        loadingComment: false,
        error: action.error
    });
};

const createCommentStart = (state, action) => {
    return updateObject(state, {
        loadingComment: true,
        loading: false,
        error: null
    });
};
const createCommentSuccess = (state, action) => {
    return updateObject(state, {
        tea: action.tea,
        loadingComment: false,
        loading: false,
        error: null
    });
};

const createCommentFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        loadingComment: false,
        error: action.error
    });
};

const loadFakeComment = (state, action) => {
    return updateObject(state, {
        tea: action.tea,
        loading: false,
        loadingComment: false,
        error: null
    });
};

export default teaReducer;