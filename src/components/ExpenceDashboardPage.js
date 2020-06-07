import React from 'react';
import ExpenseList from "./ExpenseList";
import ExpenseListFilter from "./ExpenseListFilter"
const ExpenceDashboardPage=(props)=>{
    return(
        <div>
        <ExpenseListFilter/>       
        <ExpenseList/>
        </div>
    )
}
export default ExpenceDashboardPage;