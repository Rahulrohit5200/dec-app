import React from 'react';

import ReactDOM from 'react-dom';
import {Link,NavLink,BrowserRouter,Route,Switch} from 'react-router-dom'

const Header=()=>{
    return(
        <div>        
        <p>Expensify</p>
        <NavLink to="/" exact={true}>Home</NavLink>
        <Link to="/create">Create</Link>
        <Link to="/help">Help</Link>
        </div>
    )
}
export default Header;