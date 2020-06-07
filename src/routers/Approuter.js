import React from 'react';

import ReactDOM from 'react-dom';
import {Link,NavLink,BrowserRouter,Route,Switch} from 'react-router-dom'
import ExpenceDashboardPage from "../components/ExpenceDashboardPage";

import AddPage from "../components/AddPage";

import EditPage from "../components/EditPage";
import Header from "../components/Header";
import HelpPage from "../components/HelpPage";
import NotFound from "../components/NotFound";


const Approuter=()=>{
    return(
        
    <BrowserRouter>
    <div>
    <Header/>
    <Switch>
    <Route path="/" component={ExpenceDashboardPage} exact={true} />
    <Route path="/create" component={AddPage}  />
    <Route path="/edit/:id" component={EditPage}  />
    <Route path="/help" component={HelpPage}  />
    
    <Route component={NotFound}  />
    </Switch>
    </div>
</BrowserRouter>
    )
}
export default Approuter;
