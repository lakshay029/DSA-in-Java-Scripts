// dot notation
const car={
    brand:"tesla",
    "year": 2024

}

console.log(car.brand)

car.model="model 3"
console.log(car)

// object.key=assgined value

// bracket notation
console.log(car['year'])
console.log(car['brand'])

// bracket notation

const car2 = {
    "brand-name":"Tesla"
}

// console.log(car2.brand-name)
console.log(car2["brand-name"])

// when to use bracket notation 
// key has spaces, special symbols, hyphens, numbers
// key is stored in a variable or is computed at runtime 

const obj = {
    name:"Sam"
}

//this is coming from user input 
// function getProperty(key){
//     console.log(obj[key])
// }


const key = "name"
console.log(obj[key])
console.log(obj.key)
// console.log(obj["name"])
// getProperty("name")