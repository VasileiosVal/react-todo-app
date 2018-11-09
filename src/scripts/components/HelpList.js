import React from 'react';
import {connect} from 'react-redux'
import {removeExpense} from '../actions/expenses'
import {setTextFilter, sortByAmount, sortByDate} from '../actions/filters'
import {getVisibleExpenses} from '../selectors/expenses'


class HelpList extends React.Component {
    render(){
        return (
            <div>
            <p>Helloo {this.props.temp}
            <select value={this.props.filters.sortBy} onChange={(e)=>{
                if (e.target.value == 'amount') {
                    this.props.dispatch(sortByAmount())
                }else {
                    this.props.dispatch(sortByDate())
                }
            }}>
            <option value='date'>date</option>
            <option value='amount'>amount</option>
            </select>
            </p>
            <ol>
            {this.props.filteredExpenses.map((expense)=>{
                return <li key={expense.id}>{expense.description} <span><button onClick={()=>{
                    this.props.dispatch(removeExpense(expense.id))
                }}>delete</button></span></li>
            })}
            </ol>
            <input type='text' onChange={(e)=>{
                this.props.dispatch(setTextFilter(e.target.value))
            }} value={this.props.filters.text}/>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        filteredExpenses: getVisibleExpenses(state.expenses, state.filters),
        expenses: state.expenses,
        filters: state.filters,
    }
} 

export default connect(mapStateToProps)(HelpList)


