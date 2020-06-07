import React from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux"
const ExpenseListItem=( { id,description,note,amount,createdAt } )=>{
    return(
        <div>
            <Link to={`/edit/${id}`}>{description}</Link>
            <h6>amount:{amount} createdAt:{createdAt}</h6>
        </div>
    )
}

export default ExpenseListItem;//if only need dispatch no need of ram function

