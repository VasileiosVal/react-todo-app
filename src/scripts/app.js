import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/styles.scss'
import {Provider} from 'react-redux'
import {AppRouter} from './routes/routes'
import {configureStore} from './configure/confStore'
import {addExpense, editExpense, removeExpense} from './actions/expenses'
import {setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate} from './actions/filters'
import {getVisibleExpenses} from './selectors/expenses'

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
store.dispatch(removeExpense(exp.expense.id))
store.dispatch(editExpense(last.expense.id, {description: 'restaurant'}))
// store.dispatch(setTextFilter())
// store.dispatch(setEndDate())
// store.dispatch(setStartDate(100))
// store.dispatch(setEndDate(400))
store.dispatch(setTextFilter('pota'))
// store.dispatch(sortByDate())
// store.dispatch(sortByAmount())

setTimeout(()=>{
    store.dispatch(editExpense(burger.expense.id, {description: 'mac'}))
}, 2000)








// // HOC

// class Info extends React.Component {
//     render(){
//         return (
//             <div>
//             <h1>Hello</h1>
//             <p>i am {this.props.data}</p>
//             </div>
//         );
//     }
// }

// let requireAuth = (WrappedComponent) => {
//      let Example = (props) => {
//          console.log(props)
//             return (
//                 <div>
//                 {props.res ? <WrappedComponent {...props} /> : <p>LOgin to see the resultes</p>}
                
//                 </div>
//             );
//     }    
//     return Example;

// }

// let AuthInfo = requireAuth(Info)

// ReactDOM.render(<AuthInfo data='authorized' res={true} />, document.getElementById('template'))










//****************************** */examplee ****************************************

// import React from 'react';
// import ReactDOM from 'react-dom';
// import '../styles/styles.scss'
// import {AppRouter} from './routes/routes'




// ReactDOM.render(<AppRouter />, document.getElementById('template'))

// import uuid from 'uuid'
// import { createStore,combineReducers } from 'redux'


// //************************** functions ****************************************************

// const addExpense = ({ description= '', note= '', amount= 0, createdAt= undefined } = {}) => {
//     return {
//         type: 'ADD_EXPENSE',
//         expense: {
//             id: uuid(),
//             description: description,
//             note: note,
//             amount: amount,
//             createdAt: createdAt    
//         }

//     }
// }
// const removeExpense = (id) => {
//     return {
//         type: 'REMOVE_EXPENSE',
//         id: id
//     }
// }
// const editExpense = (id, updates) => {
//     return {
//         type: 'EDIT_EXPENSE',
//         id: id,
//         updates : updates
//     }
// }
// const setTextFilter = (text = undefined) => {
//     return {
//         type: 'SET_TEXT_FILTER',
//         text: text
//     }
// }
// const sortByDate = () => {
//     return {
//         type:'SORT_BY_DATE'
//     }
// }
// const sortByAmount = () => {
//     return {
//         type: 'SORT_BY_AMOUNT'
//     }
// }
// const setStartDate = (val = undefined) => {
//     return {
//         type: 'SET_START_DATE',
//         val: val
//     }
// }
// const setEndDate = (val = undefined) => {
//     return {
//         type: 'SET_END_DATE',
//         val: val
//     }
// }

// const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    
//     return expenses.filter((expense)=>{
//         let start = typeof startDate !== 'number' || expense.createdAt >= startDate 
//         let end = typeof endDate !== 'number' || expense.createdAt <= endDate 
//         let included = typeof text !== 'string' || expense.description.toLowerCase().includes(text.toLowerCase())

//         return start && end && included
//     }).sort((a, b)=>{
//         if (sortBy == 'date'){
//             return a.createdAt > b.createdAt ? -1 : 1
//         }else if (sortBy == 'amount') {
//             return a.amount > b.amount ? -1 : 1
//         }else {
//             return 0
//         }
//     })
// }

// // ************************** reducers ***************************************
// let expensesReducer = (state = [], action)=>{
//     switch(action.type){
//         case 'ADD_EXPENSE':
//         return [...state, action.expense]
//         // return state.concat(action.expense)
//         case 'REMOVE_EXPENSE':
//         return state.filter((expense)=>{
//             return expense.id !== action.id
//         })
//         case 'EDIT_EXPENSE':
//         return state.map((expense)=>{
//             if ( expense.id == action.id) {
//                 return {...expense, ...action.updates}
//             } else {
//                 return expense
//             }
//         })
//         default:
//         return state
//     }
// }

// let defaultFilters = {
//     text: undefined,
//     sortBy: undefined,
//     startDate: undefined,
//     endDate: undefined
// }

// let filtersReducer = (state = defaultFilters, action) => {
//     switch(action.type){
//         case 'SET_TEXT_FILTER':
//         return {
//             ...state, text: action.text
//         }
//         case 'SORT_BY_DATE':
//         return {
//             ...state, sortBy: 'date'
//         }
//         case 'SORT_BY_AMOUNT':
//         return {
//             ...state, sortBy: 'amount'
//         }
//         case 'SET_START_DATE':
//         return {
//             ...state, startDate: action.val
//         }
//         case 'SET_END_DATE':
//         return {
//             ...state, endDate: action.val
//         }
//         default:
//         return state
//     }
// }

// let store = createStore(combineReducers({
//     expenses: expensesReducer,
//     filters: filtersReducer
// }))

// store.subscribe(()=>{
//     let state = store.getState()
//     let res = getVisibleExpenses(state.expenses, state.filters)
//     console.log(res)
// })


// let last = store.dispatch(addExpense({description: 'Coffee', amount: 1000, createdAt: 100 }))
// let exp = store.dispatch(addExpense({description: 'toast', amount: 100, createdAt: 200 }))
// store.dispatch(addExpense({description: 'burger', amount: 200, createdAt: 300 }))
// store.dispatch(addExpense({description: 'potato', amount: 300, createdAt: 400 }))
// store.dispatch(addExpense({description: 'gym', amount: 400 }))

// store.dispatch(removeExpense(exp.expense.id))

// store.dispatch(editExpense(last.expense.id, {description: 'restaurant'}))


// // store.dispatch(setTextFilter())
// // store.dispatch(setEndDate())

// // store.dispatch(setStartDate(100))
// // store.dispatch(setEndDate(400))
// // store.dispatch(setTextFilter('pota'))

// store.dispatch(sortByDate())
// store.dispatch(sortByAmount())

