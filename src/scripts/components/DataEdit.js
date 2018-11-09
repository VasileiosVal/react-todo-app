import React from 'react'
import DataForm from './DataForm'
import {connect} from 'react-redux';
import {editExpense} from '../actions/expenses';

class DataEdit extends React.Component {
    constructor(props){
        super(props)
        if(!props.expense){
            props.history.push('/404')
        }
    }
    render(){
        return (
            <div>
            <h4><ins>Edit expense</ins></h4><hr/>
            <DataForm editExp={(id, updates)=>{
                this.props.dispatch(editExpense(id, updates))
                this.props.history.push('/')
            }}  
            expense={this.props.expense}/>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense)=>{return expense.id === props.match.params.id})
    }
}

export default connect(mapStateToProps)(DataEdit)