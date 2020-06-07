import getVisibleExpenses from "../selector/expences";
import ExpenseTotal from "../selector/ExpensesTotal";
import numeral from "numeral";
import {connect} from "react-redux";
import React from "react";
const ExpenseSummary=(props)=>{
    const expenseword=props.len<=1?"expense":"expenses";
    const a=numeral(props.sum).format('$0,0.00');
    return(
        <div>
            <h4>Viewing {props.len} {expenseword} with a total of {a}</h4>
        </div>
    )
}





const ram=(state)=>{
    const x=getVisibleExpenses(state.expenses,{...state.filters});
    return{
        len:x.length,
        sum:ExpenseTotal(x)
    }
}



export default connect(ram)(ExpenseSummary);