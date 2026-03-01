// for...of loop
let samples="java scripts is a singal threaded language"
for(let sample of samples){
    console.log(samples)
}

let greet='hello world';
let count=0;
for(let char of greet){
    if(char==="l"){
        count++;
    }

}
console.log(count)

// include method
const email= "abcgmil.com"

if(email.includes('@') && email.includes('.')){
        console.log("vaild email")
}else{
        console.log("invalid email")
}

console.log(email)

// startsWith
const url="https/www.googlee.com";

function checkurl(url){
    if(url.startsWith("https")){
        console.log("it is a secured link")
    }else if(url.startsWith("http")){
        console.log("it is a unsecured link")
    }else{
        console.log("invaild link")
    }
}

checkurl(url)



// endsWith

const file="document.pdf"

function checkfile(file){
    if(file.endsWith(".pdf")){
        console.log("its a pdf file")
    }else if(file.endsWith(".docx")){
        console.log("its a document file")
    }else{
        console.log(file.endsWith(".jpg"||".png"),"it is a photo")
    }
}

checkfile(file)


// extract user name
// extract domain

const emailid="user@example.com"

console.log(emailid.slice(0,emailid.indexOf("@")))
console.log(emailid.slice(emailid.indexOf("@")+1))










