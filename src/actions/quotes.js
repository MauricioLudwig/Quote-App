import { GET_QOTD, SET_LOADER } from './actionTypes';
import axios from 'axios';

const uri = {
    base: 'https://favqs.com/api/',
    qotd: 'qotd'
};

export const getQOTD = qotd => ({
    type: GET_QOTD,
    qotd
});

export const setLoader = () => ({
    type: SET_LOADER
});

export const startGetQOTD = () => {

    return (dispatch) => {

        setLoader();

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