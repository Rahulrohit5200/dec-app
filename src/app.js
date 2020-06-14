import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import configureStore from "./store/configureStore";
import Approuter from "./routers/Approuter";
import {startSetExpenses} from "./action/expences";
import {Login,Logout} from "./action/auth";
import getVisibleExpenses from "./selector/expences"
import "./playground/firebase-promises";
import "./firebase/firebase";
import { firebase } from './firebase/firebase';
import {history} from "./routers/Approuter";
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

// var user = firebase.auth().currentUser;

// const fn=(user)=>
// {
//     if(user){
//         console.log("loginjdfnv")
//     }
//     else
//     console.log("logout dfv");
// }
// fn(user);


//firebase.auth().onAuthStateChanged runs everytime when user changes.
firebase.auth().onAuthStateChanged((user)=>{
    
    if(user){//so now without logged in i cant redirect to diffrent page just by changing URL
        // console.log(user.uid)
        store.dispatch(Login(user.uid));                // we are not using Login inside our startLogin bcoz startLogin and 
        store.dispatch(startSetExpenses()).then(()=>{   //startLogout work only when button login or logout 
                                                        //clicked but for 1st time we want to run it without any button clicked                  
            ReactDOM.render(m,document.getElementById("one"));
        })
        
        if(history.location.pathname==="/")//history.location.pathname stores current location
        history.push("/dashboard");
        }
    else
    {
    store.dispatch(Logout());
    history.push("/");
    ReactDOM.render(m,document.getElementById("one"));//so as to render login page otherwise it will be on loading... page indefinitely
    }
})