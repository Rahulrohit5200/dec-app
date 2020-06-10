import React from 'react';

import {Link,NavLink,BrowserRouter,Route,Switch} from 'react-router-dom'
import AddExpense from "./AddExpense";
import { connect } from 'react-redux';
import {startEditExpense} from '../action/expences'
import {startRemoveExpense} from "../action/expences";
const EditPage=(props)=>{
    return(
        <div>        
        <h3>Edit Expenses:</h3>    
        <AddExpense prevExp={props.expen} ram={(expe)=>{
            props.dispatch(startEditExpense(props.match.params.id,expe));
            props.history.push('/');
        }} />
        
        <button onClick={()=> {props.dispatch(startRemoveExpense({ id:props.match.params.id })); props.history.push('/'); } }>remove</button>
        </div>
    )
}
const sita = ( state , props ) => {

    return { expen : state.expenses.find((i)=>
        i.id === props.match.params.id
    )};
};
export default connect(sita)(EditPage);






