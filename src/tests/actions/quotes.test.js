import { GET_QOTD } from '../../actions/actionTypes';
import { getQOTD } from '../../actions/quotes';

test('should setup get quote of the day action object', () => {

    const quote = {
        id: 1,
        author: 'Damien',
        body: 'My enemies are many, my equals are none'
    };

    const action = getQOTD(quote);

    expect(action).toEqual({
        GET_QOTD,
        quote
    });

});