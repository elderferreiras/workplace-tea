import * as actionTypes from '../actions/actionTypes';

const initialState = {
    teas: [],
    starting: false,
    loading: false,
    error: null,
    hasEverything: false,
    next: null,
    previous: null
};

const teasReducer = (state = initialState, action)  => {
    switch (action.type) {
        case actionTypes.FETCH_TEAS_START:
            return {
                ...state,
                error: null,
                starting: true
            };
        case actionTypes.FETCH_TEAS_SUCCESS:
            const previousToken = state.next;
            const hasEverything = previousToken && !action.next;

            return {
                ...state,
                teas: state.teas.concat(action.teas),
                previous: previousToken,
                next: action.next,
                error: null,
                starting: false,
                loading: false,
                hasEverything: hasEverything
            };
        case actionTypes.FETCH_TEAS_FAIL:
            return {
                ...state,
                error: action.error,
                starting: false
            };
        case actionTypes.FETCH_MORE_TEAS:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
};

export default teasReducer;