import { createStore, combineReducers } from 'redux';
const { v4: uuidv4 } = require('uuid');
import database from "../firebase/firebase";
export const addExpense = ( expensedata = {} ) => ({
    type: 'ADD_EXPENSE',
    expense: expensedata
  });
  
export const startAddExpenses=(expenseData={})=>{//now in all our other files we will call startAddExpenses not addExpense
  return (dispatch)=>{//dispatch is argument givedn by default 
    const {//this is like destructuring
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    }=expenseData;
    const expense={description,note,amount,createdAt}//same like destructuring
    database.ref("expenses").push(expense).then((ref)=>{//if data added in fo=irebase then only it will change in store
      dispatch(addExpense({ id: ref.key, ...expense }))//so we used dispatch in promises
    })
  }
}







  // REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
  });
  
  // EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
  });
  