import { createStore,combineReducers } from 'redux'
import {expensesReducer} from '../reducers/expenses'
import {filtersReducer} from '../reducers/filters'

export let configureStore = () => {

let store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
})) 
return store
}