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
                if (res.data.getBlockedIPs && res.data.getBlockedIPs.id) {
                    dispatch(blockedIP());
                }
            });
        });
    };
};

export const blockIP = (ip) => {
    return (dispatch) => {
        API.graphql(graphqlOperation(mutations.createBlockedIPs, {
            input: {
                id: uuidv4(),
                ip: ip
            }
        })).then(res => {
            dispatch(blockedIP());
        });
    };
};

export const updateVote = (id, tea) => {
    return {
        type: actionTypes.UPDATE_VOTE,
        id: id,
        tea: tea
    };
};

export const countUpVote = (id, countUp, countDown) => {
    return (dispatch) => {
        if (sessionStorage.getItem(id) === 'up') {
            sessionStorage.removeItem(id);
            countUp--;
        } else if (sessionStorage.getItem(id) === 'down') {
            sessionStorage.setItem(id, 'up');
            countUp++;
            countDown--;
        } else {
            sessionStorage.setItem(id, 'up');
            countUp++;
        }

        API.graphql(graphqlOperation(mutations.updateTea, {
            input: {
                id: id,
                up: countUp,
                down: countDown
            }
        })).then(res => {
            dispatch(updateVote(id, res.data.updateTea));
        });
    };
};

export const countDownVote = (id, countUp, countDown) => {
    return (dispatch) => {
        if (sessionStorage.getItem(id) === 'down') {
            sessionStorage.removeItem(id);
            countDown--;
        } else if (sessionStorage.getItem(id) === 'up') {
            sessionStorage.setItem(id, 'down');
            countUp--;
            countDown++;
        } else {
            sessionStorage.setItem(id, 'down');
            countDown++;
        }

        API.graphql(graphqlOperation(mutations.updateTea, {
            input: {
                id: id,
                up: countUp,
                down: countDown
            }
        })).then(res => {
            dispatch(updateVote(id, res.data.updateTea));
        });
    };
};