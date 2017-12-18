import React from 'react';
import { connect } from 'react-redux';
//connect jest potrzebne żeby mieć dostęp do props.dispatch
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        //props.dispatch(addExpense(expense));
        this.props.addExpense(expense);
        this.props.history.push('/'); //przekierowuje na daną stronę/komponent
    };
    render() {
        return (
            <div>
                <h1>Add expense</h1>
                <ExpenseForm onSubmit={this.onSubmit} />
            </div>
        );
    };
};

//mapDispatchToProps - react-redux
const mapDispatchToProps = (dispatch) => ({
    addExpense: (expense) => dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);