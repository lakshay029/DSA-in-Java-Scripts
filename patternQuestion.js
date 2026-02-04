// function Diamond(n) {

//     for (let i = 1; i <= n; i++) {
//         let str = "";
//         for (let j = 1; j <= n - i; j++) {
//             str += " ";
//         }
//         for (let j = 1; j <= i; j++) {
//             str += "* ";
//         }

//         console.log(str);
//     }
//     for (let i = n - 1; i >= 1; i--) {
//         let str = "";

//         for (let j = 1; j <= n - i; j++) {
//             str += " ";
//         }

//         for (let j = 1; j <= i; j++) {
//             str += "* ";
//         }

//         console.log(str);
//     }
// }

// Diamond(5);



// function Diamond(n) {
   
//     for (let i = 1; i <= n; i++) {                // Upper part
//         let line = "";

//         for (let j = 1; j <= n - i; j++) {
//             line += " ";
//         }

//         for (let k=1; k<=2*i-1;k++){
//             if(k==1|| k==2*i-1){
//                 line+="*"
//             }else{
//                 line+=" "
//             }
//         }

//         console.log(line);
//     }

//     //lower part
//    for (let i = 1; i <= n; i++) {                
//         let line = "";

//         for (let j = 1; j <= n - i; j++) {
//             line += " ";
//         }

//         for (let k=1; k<=2*i-1;k--){
//             if(k==1|| k==2*i-1){
//                 line+="*"
//             }else{
//                 line+=" "
//             }
//         }

//         console.log(line);
//     }
// }
// Diamond(5)



// function butterfly(n){
//     //first half (LHS)
//     for(let i =0;i<=n;i++){
//         let line= ''
    
//         for(let j=0;j<=i;j++){

//             line+='*'
//         }
    
//         console.log(line)

//         }  

//     for(let i = n;i>=1;i--){
//         line = ''

//         for(let j=1;j<=i;j++){
//             line+='*'
//         }
//         console.log(line)
//     }
    
    // second half (RHS)


    //   for(let i=4;i<=1;i++){
    //     let line= '*'
    
    //     for(let j=i;j<=i-n;j++){

    //         line+=' '
    //     }
    //     for(let j=i-1;j<=i;j++)
    
    //     console.log(line)

    //     }  

    // for(let i = n;i>=1;i--){
    //     line = '*'

    //     for(let j=1;j<=i;j++){
    //         line+=' '
    //     }
    //     console.log(line)
    // }

// }
// butterfly(3)


// function Butterfly(n){
//     //first half
//     for(let i=1; i<=n;i++){
//         let line='';
//              //star populate
//         for(let j=1;j<=i;j++){
//             line+='*';
//         }
//                 //space
//         for(let j=1;j<=2*(n-1);j++){
//             line+=' '
//         }
//         for(let j=1;j<=i;j++){
//             line+='*'
//         }
//         console.log(line)
//     }
    
    //second half

    // for(let i=n-1;i>=1;i++){
    //     let line='';

    //     //populate
    //     for(let j=1;j<=i;j--){
    //         line+='*';
    //     }
    //     //space 
    //     for(let j=1;j<=2*(n-1);j++){
    //         line+=' '
    //     }
    //     console.log(line)
    // }
// }
// Butterfly(4)


// let n=3;
//     for(i=1;i<=2*n-1;i++){
//         let space="";

//         for(j=1;j<=2*n-1;j++){
//             if (j==i || j==2*n-i) space+="*";
//             else space+=" "
//           }
      
//         console.log(space)
//     }

// 1
// 21
// 321
// 4321
// 54321

function decending(n){
    for(let i=1;i<=n;i++){
        let str='';

        for(let j=i;j>=1;j--){
            str+=j
        }
        console.log(str)
    }
}
decending(5)


//armstrong number
//itrate from m to N
	for(let i=m;i<=n;i++){
		let temp =i;
		let digit = 0;

		//count the number of digit
		while(temp>0){
			temp=parseInt(temp/10) 
			digit++
		}

		//extract each digit and raise it to power 'digit'
		temp=i
		let sum=0
		while(temp>0){
			let last = temp%10
			let value=last ** digit
			sum =sum+value

			temp=parseInt(temp/10)
		}

		console.log(i)
	}