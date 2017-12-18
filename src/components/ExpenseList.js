import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => {
    return (
        <div>
            <h2>Expense list</h2>
            {
                props.expenses.length === 0 ? (
                    <p>No expenses</p>
                 ) : (
                    props.expenses.map( (expense) => {
                        return <ExpenseListItem key={expense.id} {...expense} />
                    })
                 )
            }
        </div>
    );
};

// mapStateToProps - we define things we want to get off of the store and define component connected
// with this info,
//it just maps the current state of our app to this components' props through Redux

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

// const mapStateToProps = (state) => {
//     return {
//         expenses: state.expenses,
//         filters: state.filters
//     };
// };

//connect cause automatic rerender then the store change
export default connect(mapStateToProps)(ExpenseList);

// const ConnectedExpenseList = connect((state) => {
//     return {
//         expenses: state.expenses
//     }
// })(ExpenseList);

// export default ConnectedExpenseList;