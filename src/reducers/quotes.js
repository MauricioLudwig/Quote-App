import { GET_QOTD_REQUEST, GET_QOTD_SUCCESS } from '../actions/actionTypes';

const initialState = {
    qotd: {},
    loading: true
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
                loading: true
            }
        default:
            return state;
    }

};

export default quotesReducer;