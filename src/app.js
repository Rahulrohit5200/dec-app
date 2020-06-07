import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import configureStore from "./store/configureStore";
import Approuter from "./routers/Approuter";
import {addExpense} from "./action/expences";
import {setTextFilter} from "./action/filters";
import getVisibleExpenses from "./selector/expences"
const store=configureStore();
store.subscribe(()=>{
    console.log(store.getState());
})
const x=store.dispatch(addExpense({description:"rent",amount:548,createdAt:1000}));
const y=store.dispatch(addExpense({description:"water bill",amount:748,createdAt:500}));
// const z=store.dispatch(setTextFilter("bill"));
const t=getVisibleExpenses(store.getState().expenses,store.getState().filters)
console.log(t);
const m=(
    <Provider store={store}>
    <Approuter/>
    </Provider>
)
ReactDOM.render(m,document.getElementById("one"));