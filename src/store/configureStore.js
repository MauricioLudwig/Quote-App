import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import quotesReducer from '../reducers/quotes';

const rootReducer = combineReducers({
    quotes: quotesReducer
});

export default () => {

    const store = createStore(
        rootReducer,
        applyMiddleware(thunk)
    );

    return store;  
};