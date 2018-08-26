import { GET_QOTD } from '../actions/actionTypes';

const initialState = {
    qotd: {}
};

const quotesReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_QOTD:
            return {
                ...state,
                qotd: action.qotd
            }
        default:
            return state;
    }

};

export default quotesReducer;