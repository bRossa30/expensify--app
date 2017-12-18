import moment from 'moment';
import filterReducer from '../../reducers/filters';

test('should set up default filter values', () => {
    const state = filterReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '', 
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filterReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
        text: '', 
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }
    const state = filterReducer(currentState, {type: 'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date');
});

test('should set textFilter', () => {
    const text = 'u';
    const action = {
        type: "SET_TEXT_FILTER",
        text
    }
    const state= filterReducer(undefined, action);
    expect(state.text).toBe(text);
});

test('should set startDate', () => {
    const startDate = moment(0);
    const action = {
        type: "SET_START_DATE",
        startDate
    }
    const state = filterReducer(undefined, action);
    expect(state.startDate).toEqual(startDate); //toEqual because moment is an object
});

test('should set endDate', () => {
    const endDate = moment(0);
    const action = {
        type: "SET_END_DATE",
        endDate
    }
    const state = filterReducer(undefined, action);
    expect(state.endDate).toEqual(endDate);
})