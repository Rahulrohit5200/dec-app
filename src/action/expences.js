import { createStore, combineReducers } from 'redux';
const { v4: uuidv4 } = require('uuid');
import database from "../firebase/firebase";
export const addExpense = ( expensedata = {} ) => ({
    type: 'ADD_EXPENSE',
    expense: expensedata
  });
  //call to startAddExpenses from any file then startAdd fn make use of addExpense action generator
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

export const startRemoveExpense = ({ id } = {}) =>{//return fn bcoz it do asynchronous work
  return (dispatch)=>{//thunk always passes dispatch when we return a function in action
        return database.ref(`expenses/${id}`).set(null).then(()=>{
          dispatch(removeExpense({id}))
        });
  }
}


  // EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
  });
  export const startEditExpense = ( id, updates) =>{//return fn bcoz it do asynchronous work
    return (dispatch)=>{//thunk always passes dispatch when we return a function in action
          return database.ref(`expenses/${id}`).update(updates).then(()=>{
            dispatch(editExpense(id,updates));
          });
    }
  }
    

  export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSE',
    expenses:expenses
  });
//see addexpense if any doubt
export const startSetExpenses =()=>{
  return (dispatch)=>{//full same as startaddexpense only we use one extra return bcoz one (.then) method in app.js also 
    return database.ref("expenses").once("value").then(//by returning promise chain we can continue to use then in app.js
      (snapshot)=>{
      const x=[];
      snapshot.forEach(element => {
        x.push({
          id:element.key,
          ...element.val()
        })
      });
      dispatch(setExpenses(x));
    })
  }
}


