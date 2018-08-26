import { GET_QOTD } from '../actions/actionTypes';

const initialState = {
    qotd: {},
    quotes: []
};

const quotesReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_QOTD:
            return {
                ...state,
                qotd: action.quote

            }
        default:
            return state;
    }

};

export default quotesReducer;