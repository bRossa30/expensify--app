import { createStore, combineReducers } from 'redux';

store.subscribe( () => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense( {description: 'rent', amount: 100, createdAt: -10000} ));
const expenseTwo = store.dispatch(addExpense( {description: 'coffee', amount: 300, createdAt: -1000} ));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense({ id: expenseTwo.expense.id }, {amount: 500 }));

//store.dispatch(setTextFilter('rent'));
//store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(-1230));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(123));
// store.dispatch(setEndDate());

const demoState = {
    expenses: [{
        id: 'fgwhdjfkgbnb',
        description: 'January rent',
        note: 'This was the final payment for home',
        amount: 40995,
        createdAt: 0 
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //or date
        startDate: undefined,
        endDate: undefined
    }
}

