import { GET_QOTD_REQUEST, GET_QOTD_SUCCESS, GET_QOTD_ERROR } from '../actions/actionTypes';

const initialState = {
    qotd: {},
    loading: true,
    error: false
};

const quotesReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_QOTD_SUCCESS:
            return {
                qotd: action.qotd,
                loading: false
            }
        case GET_QOTD_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            }
        case GET_QOTD_ERROR:
            return {
                ...state,
                error: true
            }
        default:
            return state;
    }

};

export default quotesReducer;