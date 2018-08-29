import { GET_QOTD_SUCCESS, GET_QOTD_REQUEST } from '../../actions/actionTypes';
import { getQOTD, setLoader } from '../../actions/quotes';

test('should setup get quote of the day action object', () => {

    const quote = {
        id: 1,
        author: 'Damien',
        body: 'My enemies are many, my equals are none'
    };

    const action = getQOTD(quote);

    expect(action).toEqual({
        type: GET_QOTD_SUCCESS,
        qotd: quote
    });

});

test('should setup set loader action object', () => {

    const action = setLoader();
    expect(action).toEqual({
        type: GET_QOTD_REQUEST
    });

});