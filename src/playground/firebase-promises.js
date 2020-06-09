const promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{//think it like a big fn which is taking time
     resolve("resolved");   
    },3000);
})
console.log("before");


//when promise completes run this function
promise.then((i)=>{//run when promise resolves not reject
    console.log(i);//i shows any data that passed to resolve by our promise
})
promise.then((i)=>{//run when promise resolves not reject
    console.log(i +"2");//i shows any data that passed to resolve by our promise
})


console.log("after");


