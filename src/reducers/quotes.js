import { GET_QOTD, SET_LOADER } from '../actions/actionTypes';

const initialState = {
    qotd: {},
    loading: true
};

const quotesReducer = (state = initialState, action) => {

    console.log(state, action);

    switch (action.type) {
        case GET_QOTD:
            return {
                qotd: action.qotd,
                loading: false
            }
        case SET_LOADER:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }

};

export default quotesReducer;