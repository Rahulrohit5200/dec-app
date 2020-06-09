import React from 'react';
import {Link,NavLink,BrowserRouter,Route,Switch} from 'react-router-dom'
import AddExpense from "./AddExpense";
import { connect } from 'react-redux';
import {startAddExpenses} from '../action/expences'
const AddPage=(props)=>{
    return(
        <div>    
        <h3>Add Expenses:</h3>    
        <AddExpense ram={(expe)=>{
            props.dispatch(startAddExpenses({...expe}));
            props.history.push('/');
        }} />
        </div>
    )
}
export default connect()(AddPage);