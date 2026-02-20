// javascripts onjects are keey value maps where values acan be data
// or function as well

// keys are working like identifiers of each property of the data.

const car={
    name:"bugatti",
    sound:function(){
        console.log("vroom")
    }
}

const cat={
    name:"paws",
    sound:function(){
        console.log("mewo")
    }
}

car.sound()
cat.sound()

const userArr = [
    20,
    "name",
    110007,
    "123, delhi"
]

if(user.isAdmin){
    console.log("User is an admin and he can access hidden functionalities")
}else{
    console.log("Access Denied")
}

console.log(user.age, user.name)


// keys are working like identifiers of each property of the data




const hybrid = {
    number:1,
    boo:true,
    obj:{
        name:"Hello"
    },
    arr:[1,2,3,4,5,6],
    str:"Hello"
}

console.log(hybrid)


// Property is a key whose value is data
// Method is a key whose value is function