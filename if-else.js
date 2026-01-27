// if (condition){
    // this block will only run if the condition evaluate to truthy 
// }

// if (condition1){
// executes if the condition 1 is truthy 
//}else if (condition2){
// executes if the condition 2 is truthy
// }

// console.log(0||100);
// console.log(0??100);
// console.log(null||'default');
// console.log(null??'default');
// console.log(undefined||'fallback');
// console.log(undefined||'fallback');
// console.log(''||'empty');
// console.log(''??'empty');

//?? nullish coersion operator 
// operand1 ?? operand 2
//

let user = {isAdmin: true, isActive:false, role:"editor"};
if (user.isAdmin && user.isActive == true){
    console.log("managerUser access")
} else if(user.role =="editor"){
    console.log("editContent")
}else {
    console.log("restricted")
}


//2
if(user.isActive){
    console.log("manageUser")
}
