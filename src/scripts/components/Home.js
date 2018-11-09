import React from 'react';
import { connect } from 'react-redux';
import HomeList from './HomeList'


const Home = (props) => {
    return (
        <div>
        <h2>Home</h2>
        {props.expenses.map((expense)=>{
            return <HomeList key={expense.id} {...expense}/>
        })}
        </div>
        );
}

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    }
}

export default connect(mapStateToProps)(Home)



