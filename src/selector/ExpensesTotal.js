

const ExpenseTotal=(expences)=>{
    var x=0;
    for(var i=0;i<expences.length;i++)
    {
        x=x+expences[i].amount
    }
    return x;
}
export default ExpenseTotal;