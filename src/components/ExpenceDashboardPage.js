import React from 'react';
import ExpenseList from "./ExpenseList";
import ExpenseListFilter from "./ExpenseListFilter"
import ExpenseSummary from "./ExpensesSummary"
const ExpenceDashboardPage=(props)=>{
    return(
        <div>
        <ExpenseSummary/>
        <ExpenseListFilter/>       
        <ExpenseList/>
        </div>
    )
}
export default ExpenceDashboardPage;