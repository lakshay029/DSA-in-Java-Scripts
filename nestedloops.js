//with objects

function checkReflection(points) {
  let maximum = -Infinity;
  let minimum = Infinity;

  let myset = {}; 

  for (let [x, y] of points) {
    maximum = Math.max(maximum, x);
    minimum = Math.min(minimum, x);

    let key = `${x},${y}`;
    myset[key] = true;
  }


  let average = minimum + maximum;

 
  for (let [x, y] of points) {
    let reflectedX = average - x;
    let reflectedKey = `${reflectedX},${y}`;

    if (!myset[reflectedKey]) {
      return "NO";
    }
  }

  return "YES";
}



//with set

function checkReflection(points) {
let maximum= -Infinity;
let minimum=Infinity;

let myset= new Set();

for(let [x,y]of points){
  maximum=Math.max(maximum,x);
  minimum=Math.min(minimum,x)

  let str=`${x},${y}`;
  myset.add(str);
}
let average=minimum+maximum;
if(average%2!==0)return 'NO';
let line=average/2;

for(let [x,y] of points){
  let str=`${2*line-x},${y}`
  if(myset.has(str)){
    continue;
  }else{
    return 'NO'
  }
}
return 'YES'
}



function countadjecent(str) {
  let vowels = "aeiou";
  let count = 0;

  str = str.toLowerCase();

  for (let i = 0; i < str.length - 1; i++) {
    if (vowels.includes(str[i]) && vowels.includes(str[i + 1])) {
      count++;
    }
  }

  return count;
}

console.log(countadjecent('audio'));




function deepcloning(object){
  let clone= Object.assign({},object);

  const keys =Object.keys(clone)
  keys.forEach(key=> {
    if(typeof object[key]=="object"){
      return clone[key]={...object[key]}
    }else{
      return clone[key]=object[key]
    }
  })
  return clone;
}
const obj={
  a:"stirg",
  b:10,
  c:{
    d:1,
    e:5
  }
}



