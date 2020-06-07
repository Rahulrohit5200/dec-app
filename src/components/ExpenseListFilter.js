import React from 'react';
import {connect} from "react-redux"
import {setTextFilter} from "../action/filters"
import {sortByAmount} from "../action/filters"
import {sortByDate} from "../action/filters"
import {setStartDate,setEndDate} from "../action/filters"
import {DateRangePicker} from "react-dates";





class ExpenceListFilter extends React.Component{

    state={
        calendarfocused:null
    }
    shyam=(e)=>{
        this.props.dispatch(setTextFilter(e.target.value))
    }
    ondateschange=({startDate,endDate})=>{
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }
    onfocuschange=(calendarfocused)=>{
        this.setState(()=>{
            return{calendarfocused:calendarfocused}
        })
    }
    render(){
        return(
            <div>
            enter your filter:
            <input type="text" value={this.props.filter.text} onChange={(e)=>{
                    this.shyam(e);
            }} />
            select your sortBy:
            <select value={this.props.filter.sortBy} onChange={(e)=>{
                e.target.value=="amount"?this.props.dispatch(sortByAmount()):this.props.dispatch(sortByDate());
            }}>
            <option value="date">date</option>
            <option value="amount">amount</option>
            </select>
            <DateRangePicker
            startDate={this.props.filter.startDate}
            endDate={this.props.filter.endDate}
            onDatesChange={this.ondateschange}
            focusedInput={this.state.calendarfocused}
            onFocusChange={this.onfocuschange}
            numberOfMonths={1}
            showClearDates={true}
            isOutsideRange={()=>false}
            />

            </div>
        )
    }
}

const ram=(state)=>{
    return{
        filter:state.filters
    }
}
export default connect(ram)(ExpenceListFilter);