import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../../utility/utility";

const initialState = {
    tea: null,
    error: null,
    loading: false
};

const teaReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_TEA_START:
            return fetchTeaStart(state, action);
        case actionTypes.FETCH_TEA_SUCCESS:
            return fetchTeaSuccess(state, action);
        case actionTypes.FETCH_TEA_FAIL:
            return fetchTeaFail(state, action);
        case actionTypes.CREATE_COMMENT_SUCCESS:
            return createCommentSuccess(state, action);
        case actionTypes.LOAD_FAKE_COMMENT:
            return loadFakeComment(state, action);
        default:
            return state;
    }
};

const fetchTeaStart = (state) => {
    return updateObject(state, {
        loading: true
    });
};

const fetchTeaSuccess = (state, action) => {
    return updateObject(state, {
        tea: action.tea,
        loading: false
    });
};

const fetchTeaFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
};

const createCommentSuccess = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
        tea: action.tea
    });
};

const loadFakeComment = (state, action) => {
    return updateObject(state, {
        tea: action.tea
    });
};

export default teaReducer;