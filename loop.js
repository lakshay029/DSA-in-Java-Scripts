//paindorm
// n=Number(n); //convert n into a integer
//   let original = n;   //n is a orignal number
//   let reversed= 0;       //0 is reversed number 
//   while(n>0)                 //if n is greater then 0 
//     let digit = n%10;            // 
//     reversed= reversed *10+digit;
//     n=Math.floor(n/10);
//   }
//   console.log(original===reversed)

//  function Drawstar(n){
//   for(let i=1; i<=n;i++){
//     str= "";

//     for(let j=n-i; j>0;j--){
//       str+=" ";
//     }

//     for(j=1;j<=i;j++){
//       str+="* ";
//     }
//   }
// }
// Drawstar(3)


// function whileDraw(){
//   let i=1;
//   while(i<=n){
//     let str="";
//   }
// }
function isPrime(n){

let isPrime = new Array(n+1).fill(true)



for(let i=2;i*i<=n;i++){
  if(isPrime[i]){
    for(let j=i*i;j<=n;j++){
      console.log(isPrime(false))
    }
  }
}

for(let i=2;i<=n;i++){
  if(isPrime[i]){
    console.log(i)
  }
}

}



isPrime(8)
