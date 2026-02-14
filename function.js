//write a function to print the table of a number paremeter->
function number(n){
    for(let i=1;i<=10;i++){
        console.log(`${n}X${i}=${n*i}`)
    }
    return "execution completed"
}
console.log(number(10))

//function expressions
// function are the first class object 


function createCounter(){
    let count=0;

    return function(){
        count++;                     
        console.log(count);
    }
}

let mycounter = createCounter();

mycounter();
mycounter();
mycounter();