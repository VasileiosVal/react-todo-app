import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/styles.scss'
import {Provider} from 'react-redux'
import {AppRouter} from './routes/routes'
import {configureStore} from './configure/confStore'
import {addExpense, editExpense, removeExpense} from './actions/expenses'

let store = configureStore()

let jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('template'))



let last = store.dispatch(addExpense({description: 'Coffee', amount: 1000, createdAt: 100 }))
let exp = store.dispatch(addExpense({description: 'toast', amount: 100, createdAt: 200 }))
let burger = store.dispatch(addExpense({description: 'burger', amount: 200, createdAt: 300 }))
store.dispatch(addExpense({description: 'potato', amount: 300, createdAt: 400 }))
store.dispatch(addExpense({description: 'gym', amount: 400 }))
// store.dispatch(removeExpense(exp.expense.id))
// store.dispatch(editExpense(last.expense.id, {description: 'restaurant'}))
// store.dispatch(setTextFilter())
// store.dispatch(setEndDate())
// store.dispatch(setStartDate(100))
// store.dispatch(setEndDate(400))
// store.dispatch(setTextFilter('pota'))
// store.dispatch(sortByDate())
// store.dispatch(sortByAmount())

setTimeout(()=>{
    store.dispatch(editExpense(burger.expense.id, {description: 'mac'}))
}, 2000)



