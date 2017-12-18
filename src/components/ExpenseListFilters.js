import React from 'react';
import { connect } from 'react-redux';
import {DateRangePicker} from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';


// in class based components we need to use this.props, in stateless function componenets only props
export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };
    onDatesChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };
    onFocusChange = (calendarFocused) => {
        this.setState( () => ({ calendarFocused }));
    };
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    //we need to update the store here via dispatch - dispatch is also in the props
    };
    onSortChange = (e) => {
        if (e.target.value === 'date') {
            this.props.sortByDate();
        } else if (e.target.value === 'amount') {
            this.props.sortByAmount();
        }
    };
    render() {
        return (
            <div>
                <h3>Filter by:</h3>
                <input 
                    type="text" 
                    value={this.props.filters.text} 
                    onChange={this.onTextChange}
                />
                <select 
                    value={this.props.filters.sortBy} 
                    onChange={this.onSortChange}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div>
        )
    };
};

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: text => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
});


//żeby móc korzsytać z filtra, który wpisze użytkownik trzeba połączyć store z tym komponentem
//connect mapuje bieżący store na props.filter
//za pomocą connect komponent ExpenseListFilters ma dostęp do props.filters

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);