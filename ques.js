// const matrix=[[1,2],[3,4],[5,6]];

// const sumof =matrix.reduce((acc,ele)=>{
//     return acc+ele.reduce((sum,num)=>sum+num,0)
// },0);

// console.log(sumof)


// const student =[
//     {name:'jone',score:85},
//     {name:'jane',score:92},
//     {name:'bob',score:88}
// ];
// const rolls= student.map((student, index)=>{
//     student.rollNumber=index+1
//     return student;
// })
// console.log(rolls)

// const items=['A','B','C']

// const firstorLast= items.map((items,index,array)=>{
//     return {
//         items:items,
//         isfirst: index===0?true:false,
//         islast:index ===array.length-1 ?true:false
//     }
// })
// console.log(firstorLast)




// using reduce find maximum and minimum array

// arr=[5,4,6,8,4,2,4,5];

// const number= arr.reduce((acc,val)=>{
//     return {
//         max: Math.max(acc.max,val),
//         min:Math.max(acc.min,val)
//     }
// },
// {
//     max:number[0],
//     min:number[0]
// }
// )
// console.log(number)

// find all pairs in an array that sum to a target value

const arrays=[2,4,3,5,7,8,9]
const sum=7

function findpath(arr,target){
    const pair=[]          //create an empty array 

    for(let i=0;i<arr.length;i++){
        let first=arr[i];

        for(let j=i+1;j<arr.length;j++){
            if(first+arr[j]===target){
                pair.push([first,arr[j]])
            }
        }
    }
    return pair;
}
findpath()


//find the product of array excpet itself
[10,10,10,10,10,10,10,10,10,10,10,10]




