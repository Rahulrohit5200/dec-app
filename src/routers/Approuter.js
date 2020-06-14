import React from 'react';

import ReactDOM from 'react-dom';
import {Link,NavLink,Router,Route,Switch} from 'react-router-dom'
import ExpenceDashboardPage from "../components/ExpenceDashboardPage";

import AddPage from "../components/AddPage";
import Login from "../components/Login";
import EditPage from "../components/EditPage";
import Header from "../components/Header";
import HelpPage from "../components/HelpPage";
import NotFound from "../components/NotFound";
import { createBrowserHistory } from 'history';
import PrivateRoute from "./PrivateRoute";
export const history = createBrowserHistory();
const Approuter=()=>{
    return(
        
    <Router history={history}>
    <div>
    <Switch>
    <Route path="/" component={Login} exact={true} />
    <PrivateRoute path="/dashboard" component={ExpenceDashboardPage} exact={true} />
    <PrivateRoute path="/create" component={AddPage}  />
    <PrivateRoute path="/edit/:id" component={EditPage}  />
    <Route path="/help" component={HelpPage}  />
    
    <Route component={NotFound}  />
    </Switch>
    </div>
</Router>
    )
}
export default Approuter;
