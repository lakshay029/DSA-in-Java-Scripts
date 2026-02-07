//intro -> java script arrays are dynamic and ordered collection of data can store multiple values of any type
// unlike complier based language javascript can store mixed data types

const array=[1,'two',false,[1,2,3],{name:"abc"}]
console.log(array)

//declaration method of array
// square bracket []literals
const array1=[1,2,3,4]

//array constractor (new key)
const number=new Array(1,2,3,4)
//presized array
const sizedarray= new Array(5)


// best practice -
// 1. always prefer array literals instead of new array()
//2. dclare arrays with const to prevent reassginment 
//3. always use descriptive prural names: users , products etc


function Arrayat(array, index){
    //edge case: array is empty -> return undefined
    if(array.length===0) return undefined;
    
    //positive index -> 0 to length-1 -> element else undefined
    if(index>=0){
        if(index<array.length){
            return array[index]
        }else{
            return undefined;
        }
    }
    //negative index -> -1 to -length -> element from last else undefined
    else{
        const newIndex = array.length+index;

        if(newIndex>=0 && newIndex<=array.length){
            return array[newIndex]
        }else{
            return undefined
        }

    }
}



const veggies = ["tomato", "potato", "onion", "carrot"]

console.log(Arrayat(veggies, -10))


const sample = [1,2,3,4,5]

console.log(sample.length)


