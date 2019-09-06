import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utility/utility';

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
            return fetchTeasStart(state);
        case actionTypes.FETCH_TEAS_SUCCESS:
           return fetchTeasSuccess(state, action);
        case actionTypes.FETCH_TEAS_FAIL:
            return fetchTeasFail(state, action);
        case actionTypes.FETCH_MORE_TEAS:
            return fetchMoreTeas(state);
        case actionTypes.CREATE_TEA_START:
            return createTeaStart(state);
        case actionTypes.CREATE_TEA_SUCCESS:
            return createTeaSuccess(state, action);
        case actionTypes.CREATE_TEA_ERROR:
            return createTeaError(state);
        case actionTypes.BLOCKED_IP:
           return blockedIP(state);
        case actionTypes.LOAD_FAKE_TEA:
            return loadFakeData(state, action);
        case actionTypes.UPDATE_VOTE:
            return updateVote(state, action);
        default:
            return state;
    }
};

const fetchTeasStart = (state) => {
    return updateObject(state, {
        error: null,
        starting: true
    });
};

const fetchTeasSuccess = (state, action) => {
    let previousToken = state.next;
    let teas = state.teas.concat(action.teas);
    let hasEverything = !action.init && previousToken && !action.next;

    if (action.init) {
        teas = action.teas;
        previousToken = null;
        hasEverything = false;
    }

    return updateObject(state, {
        teas: teas,
        previous: previousToken,
        next: action.next,
        error: null,
        starting: false,
        loading: false,
        hasEverything: hasEverything
    });
};

const fetchTeasFail = (state, action) => {
    return updateObject(state,{
        error: action.error,
        starting: false
    });
};


const fetchMoreTeas = (state) => {
    return updateObject(state,{
        loading: true
    });
};


const createTeaStart = (state) => {
    return updateObject(state);
};


const createTeaSuccess = (state, action) => {
    const currentTeas = [...state.teas];
    currentTeas.unshift(action.tea);

    return updateObject(state,{
        teas: currentTeas
    });
};

const createTeaError = (state) => {
    return updateObject(state);
};

const blockedIP = (state) => {
    return updateObject(state, {
        blocked: true
    });
};

const loadFakeData = (state, action) => {
    const currentTeas = [...state.teas];
    currentTeas.unshift(action.tea);

    return updateObject(state,{
        teas: currentTeas
    });
};

const updateVote = (state, action) => {
    const teas = [...state.teas];

    const teaIndex = teas.findIndex(tea => tea.id === action.tea.id);

    teas[teaIndex] = {...teas[teaIndex], up: action.tea.up, down: action.tea.down};

    return updateObject(state,{
        teas: teas
    });
};

export default teasReducer;