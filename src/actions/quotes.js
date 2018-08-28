import { GET_QOTD_REQUEST, GET_QOTD_SUCCESS } from './actionTypes';
import axios from 'axios';

const uri = {
    base: 'https://favqs.com/api/',
    qotd: 'qotd'
};

export const setLoader = () => ({
    type: GET_QOTD_REQUEST
});

export const getQOTD = qotd => ({
    type: GET_QOTD_SUCCESS,
    qotd
});

export const startGetQOTD = () => {

    return (dispatch) => {

        dispatch(setLoader());

        axios.get(uri.base + uri.qotd)
            .then(res => {
                const { id, author, body } = res.data.quote;
                dispatch(getQOTD({
                    id,
                    author,
                    body
                }));
            }).catch(e => {
                alert(e);
            });

    };
};