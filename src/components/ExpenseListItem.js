import React from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import numeral from "numeral";
import moment from "moment";
const ExpenseListItem=( { id,description,note,amount,createdAt } )=>{
    return(
        <div>
            <Link to={`/edit/${id}`}>{description}</Link>
            <h5><strong>amount:</strong>{numeral(amount).format('$0,0.00')}  <strong>createdAt:</strong>{moment(createdAt).format('MMMM,Do YYYY')}</h5>
        </div>
    )
}

export default ExpenseListItem;//if only need dispatch no need of ram function

