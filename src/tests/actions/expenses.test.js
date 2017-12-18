import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({ //toEqual - check all properties of object and arrays
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should setup edit expense action object', () => {
    const action = editExpense({ id: '123abc'}, {note: 'add some note'});
    expect(action).toEqual({ 
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'add some note'
        }
    });
});

test('should setup add expense action whith proper values', () => {
    const expenseData = {
        description: 'rent',
        amount: 500,
        createdAt: 1000,
        note: 'some note'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({ 
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should setup add expense action whith default values', () => {
    const action = addExpense();
    expect(action).toEqual({ 
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            amount: '',
            createdAt: 0,
            note: '',
            id: expect.any(String)
        }
    });
})