import * as actionTypes from '../actions/actionTypes';
import {getWorkplaceId} from "../../helpers/utils";
import {API, graphqlOperation} from "aws-amplify";
import {getBlockedIPs, getWorkplace} from "../../graphql/queries";
import * as mutations from "../../graphql/mutations";
import axios from "axios";
const uuidv4 = require('uuid/v4');

export const fetchTeasStart = () => {
    return {
        type: actionTypes.FETCH_TEAS_START
    };
};

export const fetchTeasSuccess = (teas, next, init) => {
    return {
        type: actionTypes.FETCH_TEAS_SUCCESS,
        teas: teas,
        next: next,
        init: init
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

export const fetchTeas = (init) => {
    return (dispatch, getState) => {
        if (!getState().teasReducer.teas.length) {
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
            dispatch(fetchTeasSuccess(teas.items, teas.nextToken, init));
        }).catch(err => {
            dispatch(fetchTeasFail(err));
        });
    }
};

export const createTeaSuccess = (tea) => {
    return {
        type: actionTypes.CREATE_TEA_SUCCESS,
        tea: tea
    }
};

export const createTeaError = (err) => {
    return {
        type: actionTypes.CREATE_TEA_ERROR,
        error: err
    }
};

export const createTeaStart = () => {
    return {
        type: actionTypes.CREATE_TEA_START
    }
};

export const submitTea = (content, ip) => {
    return (dispatch) => {
        dispatch(createTeaStart());
        const data = {
            input: {
                content: content,
                ip: ip,
                teaWorkplaceId: getWorkplaceId()
            }
        };

        API.graphql(graphqlOperation(mutations.createTea, data)).then(res => {
            dispatch(createTeaSuccess(res.data.createTea));
        }).catch(err => {
            dispatch(createTeaError(err));
        });
    };
};

export const blockedIP = () => {
    return {
        type: actionTypes.BLOCKED_IP
    }
};

export const isIPBlocked = () => {
    return (dispatch) => {
        axios.get('https://api.ipify.org/?format=json').then(res => {
            API.graphql(graphqlOperation(getBlockedIPs, {ip: res.data.ip})).then(res => {
                if(res.data.getBlockedIPs && res.data.getBlockedIPs.id) {
                    dispatch(blockedIP());
                }
            });
        });
    };
};

export const blockIP = (ip) => {
    return (dispatch) => {
        console.log(ip);
        API.graphql(graphqlOperation(mutations.createBlockedIPs,  {
            input: {
                id: uuidv4(),
                ip: ip
            }
        })).then(res => {
            dispatch(blockedIP());
        });
    };
};
