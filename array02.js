// // //  sort()

// // let number=[5,4,3,6,7,9,2]

// // // acsending order
// // console.log(number.sort((a,b)=>a-b))

// // // decending order
// // console.log(number.sort((a,b)=>b-a))


// // const products=[
// //     {
// //         name:'B',
// //         price:30
// //     },
// //     {
// //         name:'A',
// //         price:20
// //     },
// //     {
// //         name:'C',
// //         price:10
// //     }
// // ]


// // console.log(products.sort((a,b)=>a.price-b.price))


// const employees=[
//     {name:"jone",dept:"IT",salary:50000},
//     {name:"Alice",dept:"HR",salary:55000},
//     {name:"Bob",dept:"IT",salary:60000},
//     {name:"Carol",dept:"HR",salary:48000}
// ];

// // console.log(employees.sort((a,b)=>a.salary-b.salary))

// console.log(
//     employees.sort(
//         (a,b)=>{
//             if(a.dept<b.dept) return -1;
//             if(a.dept>b.dept) return 1;

//             return a.salary-b.salary;
//         }
//     )
// )



// reversed

const mixed=[5,null,2,undefined,8,1,null];

console.log(
    mixed.sort(
        (a,b)=>{
          
            if(a<b) return -1

            return a-b
        }
    )
)
// console.log(mixed.reverse())
