import React from 'react';
import {connect} from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import getVisibleExpenses from "../selector/expences";
const ExpenseList=(props)=>{
    return(
        <div>
        <h1>ExpenseList</h1>
        {props.exp.map((i,index)=>{
            return(<ExpenseListItem key={index} {...i}/>)
        })}
        </div>
    )
}
const ram=(state)=>{
    return {exp:getVisibleExpenses(state.expenses,{...state.filters})};
}
export default connect(ram)(ExpenseList);