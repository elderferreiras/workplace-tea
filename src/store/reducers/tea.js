import * as actionTypes from '../actions/actionTypes';

const initialState = {
    tea: null,
    error: null,
    loading: false
};

const teaReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_TEA_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.FETCH_TEA_SUCCESS:
            return {
                ...state,
                tea: action.tea,
                loading: false
            };
        case actionTypes.FETCH_TEA_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        case actionTypes.CREATE_COMMENT_SUCCESS:
            return {
                ...state,
                error: action.error,
                loading: false,
                tea: action.tea
            };
        default:
            return state;
    }
};

export default teaReducer;