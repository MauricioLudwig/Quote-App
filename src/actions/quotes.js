import { GET_QOTD, GET_QUOTES } from './actionTypes';
import axios from 'axios';

const BASE_URI = 'https://favqs.com/api/';
const QOTD_URI = 'qotd';
const QUOTES_URI = 'quotes';

const getQOTD = quote => ({
    type: GET_QOTD,
    quote
});

const getQuotes = quotes => ({
    type: GET_QUOTES,
    quotes
});

export const startGetQOTD = () => {
    return (dispatch) => {

        axios.get(BASE_URI + QOTD_URI)
            .then(res => {
                const { id, author, body } = res.data.quote;
                dispatch(getQOTD({
                    id,
                    author,
                    body
                }));
            }).catch(e => {
                console.log(e);
            });

    };
};