// math moduals
// console.log(Math.ceil(84.1276))
// console.log(Math.floor(84.53786))

// console.log(Math.trunc(-4.7654))

// console.log(NaN===NaN)


// console.log(1/0)
// //type coercion 
// console.log(1+"1") //in addtion it concatinate (it print num as string)
// console.log(1-"1")// in substraction it will not (it print num as num)


//comparision opertors 
// != -> not equal to 
// !== -> not euqal to equal to 

// truthy and falsey values -> if the variable have the value then it is a truthy value
// true, non-zero number , non empty string, array, object 
// if([0]){
//     console.log("truthy")
// }    
// else{
//     console.log("falsy")

// }

// falsy -> false , zero , empty string , null , NaN , undefined
 
if( NaN == NaN ){
    console.log("truthy")
 }
 else{
    console.log("falsy")
 }

 //false ==0 -> true
 //[] == ![] -> true
 // false ===0 -> false
 // null == undefine -> true
 // null=== undefine -> false
 // NaN == NaN -> false


//  logical operators
//  AND , OR , NOT 
//  5&&10-> 10 (truthy) both value are true then return second value 10

console.log(0.3==(0.1+0.2)) //->false because binary conversion gives the different value.


// **************************######*********************************



//Math object 

// Math object this is a builtin static object that provides mathematical constants and functions



let number = 833.33333
// number = Math.round(number)


console.log(Math.round(83.30740730707037074))


Math.floor(84.33334) //84
Math.ceil(84.3334) //85

Math.trunc(4.9) //4
Math.trunc(-4.9) //-4
console.log(Math.trunc(4.99999999))

console.log(Math.round(5.5))


let pi = 3
const newpi = pi.toFixed(2) //returns a string
console.log(typeof(newpi))


console.log(parseInt(newpi)) //string -> number


parseFloat() //string -> float


// NaN Not a number

let resultt = parseInt("HEllo");
let calc  = 0/0;

let invalid = Math.sqrt(-1)  


console.log(isNaN(resultt))

console.log(NaN===NaN)


// = assignment operator 
//  == loose comparison (type compare X)
console.log(2=="2")
//=== strict comparison (type is also checked)
console.log(2==="2")


console.log(1/0) //infinity


//Type coercion
console.log(1 + "1");
console.log(1-"1")
console.log("1"-1)
console.log("1"+1)
console.log("5"/2)

// This happends because the + operator performs string concatenation when one operand is a string, but -, * and / operators coerce strings to numbers


console.log(([1,2,3,4] + [5,6,7,8]))
// arrays are converted to strings during concatenation

console.log([] + {})

const user = {
    name:"ABC",
    age:20,
    city:"Delhi"
}


console.log("20" - "10");
console.log("20" + "10");
console.log("20" * "2");
console.log("20" / "5");


console.log(true + true); //2
console.log(true + false); //1
console.log(false + false); //0
console.log(true * 5); //5
//boolean values are coerced into numbers


console.log(1 == "1");
console.log(1 === "1");
console.log(null == undefined);
console.log(null === undefined);
// == performs type coercion before checking
//  === check both type and value