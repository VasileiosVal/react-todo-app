import React from 'react'
import DataForm from './DataForm'
import { connect } from 'react-redux';
import {addExpense} from '../actions/expenses'

const DataCreate = (props) => {
    return (
        <div>
        <h4><ins>Create expense form</ins></h4><hr/>
        <DataForm createExp={(val)=>{
            props.dispatch(addExpense(val))
            props.history.push('/')
        }}/>
        </div>
    );
}

export default connect()(DataCreate)




