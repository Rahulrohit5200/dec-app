import React from 'react';

import ReactDOM from 'react-dom';
import {Link,NavLink,BrowserRouter,Route,Switch} from 'react-router-dom'
import {connect} from "react-redux";
import {startLogout} from "../action/auth";
const Header=(props)=>{
    return(
        <div>        
        <p>Expensify</p>
        <NavLink to="/" exact={true}>Home</NavLink>
        <Link to="/create">Create</Link>
        <Link to="/help">Help</Link>
        <button onClick={()=>props.dispatch(startLogout())}>Logout</button>
        </div>
    )
}
export default connect()(Header);