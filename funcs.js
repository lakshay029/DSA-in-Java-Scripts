//IIFE-immediately invoaked function expression 
(function(){
    console.log("this is iife")
})();


// higer order function-
// when a function call another function as an argument.

// function higherOrder(callback){
//     console.log("higher order")
//     callback()
// }
// higherOrder(()=>{
//     console.log("i am callback")
// })

// const callback=()=>{
//     console.log("i am callback")
// }
// higherOrder(callback)


// sort by age ascending and salary decending

// const employees=[
//     {name:'Alice',age:30,salary:50000},
//     {name:'bob',age:25,salary:60000},
//     {name:'charlie',age:25,salary:55000},
// ]

// console.log(
//     employees.sort(
//         (a,b)=>{
            
//             if(a.age<b.age)return -1;
//             if(a.age>b.age)return 1;

//         }
//     )
// )





