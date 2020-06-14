import React from 'react';
import { connect } from 'react-redux';
import {startLogin} from "../action/auth";

const Login=(props)=>{
    return(
    <div>
    <button onClick={()=> {props.dispatch(startLogin())}}>Login</button>
    </div> )
}
export default connect()(Login);

 
        