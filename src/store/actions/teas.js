import * as actionTypes from '../actions/actionTypes';
import {getWorkplaceId} from "../../helpers/utils";
import {API, graphqlOperation} from "aws-amplify";
import {getWorkplace} from "../../graphql/queries";
import * as mutations from "../../graphql/mutations";

export const fetchTeasStart = () => {
    return {
        type: actionTypes.FETCH_TEAS_START
    };
};

export const fetchTeasSuccess = (teas, next) => {
    return {
        type: actionTypes.FETCH_TEAS_SUCCESS,
        teas: teas,
        next: next
    };
};

export const fetchTeasFail = (error) => {
    return {
        type: actionTypes.FETCH_TEAS_FAIL,
        error: error
    };
};

export const fetchMoreTeas = () => {
    return {
        type: actionTypes.FETCH_MORE_TEAS
    };
};

export const fetchTeas = () => {
    return (dispatch, getState) => {
        if (! getState().teasReducer.teas.length) {
            dispatch(fetchTeasStart());
        } else {
            dispatch(fetchMoreTeas());
        }

        let variables = {id: getWorkplaceId(), sortDirection: 'DESC', limit: 10};

        if (getState().teasReducer.next) {
            variables.nextToken = getState().teasReducer.next;
        }

        API.graphql(graphqlOperation(getWorkplace, variables)).then(res => {
            const teas = res.data.getWorkplace.teas;
            dispatch(fetchTeasSuccess(teas.items, teas.nextToken));
        }).catch(err => {
            dispatch(fetchTeasFail(err));
        });
    }
};

export const createTea = (content) => {
    return {
        type: actionTypes.CREATE_TEA,
        content: content
    }
};

export const submitTea = (content) => {
    API.graphql(graphqlOperation(mutations.createTea, {
        input: {
            content: content,
            teaWorkplaceId: getWorkplaceId()
        }
    }));
};
