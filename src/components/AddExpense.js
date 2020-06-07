import React from 'react';
import moment from "moment";
import {SingleDatePicker} from "react-dates";
import "react-dates/lib/css/_datepicker.css";

class AddExpense extends React.Component{
    state={
        description:this.props.prevExp?this.props.prevExp.description:"",
        amount:this.props.prevExp?this.props.prevExp.amount.toString():"",
        note:this.props.prevExp?this.props.prevExp.note:"",
        createdAt:this.props.prevExp?moment(this.props.prevExp.createdAt):moment(),
        calendarFocused:false,
        error:false
    }
   
    ram=(e)=>{
        const l=e.target.value;
        if(!l||l.match(/^\d{1,}(\.\d{0,2})?$/))
        this.setState(()=>{
            return({amount:l})
        })
    } 
 /*this is like ram fn just in place of e other thing*/    
    shyam=(x)=>{
        if(x){//so we cant delete date otherwise is empty is also availavle we can delete it also
        this.setState(()=>{
            return({createdAt:x})
        })
    }
    }
    onFocusChange=({focused})=>{
        this.setState(()=>{
            return({calendarFocused:focused})
        })
    }
    Submit=(e)=>{
        e.preventDefault();
        if(!this.state.description||!this.state.amount)
        {
            this.setState(()=>{
                return({error:true})
            })
        }
        else{
            this.setState(()=>{
                return({error:false})
            })
         //just calling the ram function from props as ram function contain argument so sending some argument   
        this.props.ram({description:this.state.description,note:this.state.note,createdAt:this.state.createdAt.valueOf(),amount: parseFloat(this.state.amount)})  
        }
    }
    render()
    {
                return(
            <div>
                    {this.state.error && <p>please enter amount and description</p>}
                <form onSubmit={this.Submit}>
                <input type="text" placeholder="description" autoFocus//whenever something like we want to fill and chane the state then use value and onchange
                value={this.state.description} onChange={(e)=>{
                    const t=e.target.value;//we cant directly do
                    this.setState(()=>{
                        return({description:t})
                    })
                }}/>
                <input type="text" placeholder="amount" value={this.state.amount} onChange={this.ram}/>
                <SingleDatePicker
                date={this.state.createdAt}//date is just like value in other input types
                onDateChange={this.shyam}
                focused={this.state.calendarFocused}//just like date only
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                isOutsideRange={()=>false}
                
                
                />
                <textarea placeholder="Add a note(optional)!" value={this.state.note} onChange={(e)=>{
                    const z=e.target.value;
                    this.setState(()=>{
                        return({note:z})
                    })
                }} ></textarea>
                <button >Add Expense</button>
                </form>
            </div>
        )
    }
}

export default AddExpense
