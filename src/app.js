import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import configureStore from "./store/configureStore";
import Approuter from "./routers/Approuter";
import {startSetExpenses} from "./action/expences";
import {setTextFilter} from "./action/filters";
import getVisibleExpenses from "./selector/expences"
import "./playground/firebase-promises";
import "./firebase/firebase";
const store=configureStore();
// store.subscribe(()=>{
//     console.log(store.getState());
// })
// const x=store.dispatch(addExpense({description:"rent",amount:548,createdAt:1000}));
// const y=store.dispatch(addExpense({description:"water bill",amount:748,createdAt:500}));
// const z=store.dispatch(setTextFilter("bill"));
// const t=getVisibleExpenses(store.getState().expenses,store.getState().filters)
// console.log(t);
const m=(
    <Provider store={store}>
    <Approuter/>
    </Provider>
)
//So in our app.js file we wrap our 2nd ReactDOM.render() call inside of a store.dispatch call where we then 
//dispatch startSetExpenses.  What I believe is happening is that by calling dispatch on our store, 
//we're setting the value of the state equal to the expenses that can be found in our 
//database (via the startSetExpenses action).  Once the state has been set, the ExpenseList and ExpenseListItem access 
//our state because they're connected, which in turn renders our expenses to the screen.  
//Taking this one step further, whenever we add a new expense and are redirected to the home page, our app.js 
//file then goes through this entire process again, re-rendering our Loading message while it sets the state 
//equal to a new array of expenses that are fetched from our database call within startSetExpenses.



ReactDOM.render(<p>...Loading</p>,document.getElementById("one"));
store.dispatch(startSetExpenses()).then(()=>{

    ReactDOM.render(m,document.getElementById("one"));
})
//startsetexpenses returns a function given below->
//that function returns a promise->
//in that one .then is already present after completing that then it will complete then of above

// (dispatch)=>{
//     return database.ref("expenses").once("value").then(
//       (snapshot)=>{
//       const x=[];
//       snapshot.forEach(element => {
//         x.push({
//           id:element.key,
//           ...element
//         })
//       });
//       dispatch(setExpenses(x));
//     })
//   }