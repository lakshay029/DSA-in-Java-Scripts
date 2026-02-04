//ternry opertor 
//are concise and shorthand property to write conditional expression
//condition -> binary o/p
// condition ? expif true: exp if false
//
function sayhello(name){
    console.log(`hello, ${name}`)
}

function sayBye(name){
    console.log(`Goodbye, ${name}`)
} 

let isleaving =true;
let name=" Alice";

isleaving?sayBye(name):sayhello(name)

//uses
//1.implementing any logic
//2.call any function
//3. assinging values

//best practices
//keep ternery operator simple and easy to read
//avoid nesting in ternery operators
// use it for simple calculation , assging or return values not for complex multi step logics

