import * as actionTypes from '../actions/actionTypes';

const initialState = {
    teas: [],
    starting: false,
    loading: false,
    error: null,
    hasEverything: false,
    previous: null,
    blocked: false,
    next: null
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
            let previousToken = state.next;
            let teas = state.teas.concat(action.teas);
            let hasEverything = !action.init && previousToken && !action.next;

            if (action.init) {
                teas = action.teas;
                previousToken = null;
                hasEverything = false;
            }

            return {
                ...state,
                teas: teas,
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
        case actionTypes.CREATE_TEA_START:
            return {
                ...state
            };
        case actionTypes.CREATE_TEA_SUCCESS:
            const currentTeas = [...state.teas];
            currentTeas.unshift(action.tea);

            return {
                ...state,
                teas: currentTeas
            };
        case actionTypes.CREATE_TEA_ERROR:
            return {
                ...state
            };
        case actionTypes.BLOCKED_IP:
            return {
                ...state,
                blocked: true
            };
        case actionTypes.LOAD_FAKE_TEA: {
            const currentTeas = [...state.teas];
            currentTeas.unshift(action.tea);

            return {
                ...state,
                teas: currentTeas
            };
        }
        case actionTypes.UPDATE_VOTE: {
            const teas = [...state.teas];

            const teaIndex = teas.findIndex(tea => tea.id === action.tea.id);

            teas[teaIndex] = {...teas[teaIndex], up: action.tea.up, down: action.tea.down};

            return {
                ...state,
                teas: teas
            };
        }
        default:
            return state;
    }
};

export default teasReducer;