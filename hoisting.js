var vaVariable=10
let letVariable=20

console.log(vaVariable)
console.log(letVariable)

//hoisting -> hositing is the java script machanism where varibale and function declaration are automaticlly
// moved to the top of their containg scope before the code is execured
// var-hositing-> variable decalared with var are hosited tot he top of their scope and initilisation 
// with the value undefined.

// sayHello();

// var sayHello=function(){
//     console.log("Hello from variable")
// };

// function sayHello(){
//     console.log("hello from function")
// }

// sayHello()


// questions


var double=22

function double(num){
    return(num*2)
}

console.log(typeof double);


// 2  gives an error cannot access 
let rate =10

function calculate(){
    console.log(rate);
    let rate=20;
}

calculate();