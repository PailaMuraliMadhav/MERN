// ARRAY 
// stores list of values in a ordered manner
let a=[1,"Murali","GG"]
console.log(a);

// Traversal
var fr=["Kamal","Monty","Siva","Loki"]
console.log(fr);
console.log(fr[0]);
console.log(fr[4]); //Undefined

console.log(fr.length);

// Searching
// indexOf  //LastINDExOf //includes
var fr=["Komal","Monty","Loki","Surya","Dilli"];

console.log(fr);
console.log(fr.indexOf("Dilli"));
console.log(fr.indexOf("Komal"));   // if the value is not present it returns -1
console.log(fr.indexOf("Komal",2)); // it will start searching from index 2
console.log(fr.lastIndexOf("Loki")); //it will search from the end of the array
console.log(fr.includes("Surya"));  //TRUE

console.log(fr.includes("Murali"));  //FALSE

var gg=["Jan","Sep","Oct","Dec","Mar","Apr"];
console.log(gg.sort());  // it will sort the array in ascending order


var g=[5,7,8,1,51,44,1000,987]
console.log(g.sort()); //it will not sort the numbers in ascending order beacause it is sorting in string format

// CRUD





//! OBJECT
// stores key value pairs
let student ={
    name : "Murali",
    age: 20,
    course: "B.Tech"
}
console.log(student);
console.log(student.name);
console.log(Object.keys(student)); // it will return the keys of the object
console.log(Object.values(student)); // it will return the values of the object

// ! Destructing

// Array Destructing

const biodata = ["Paila",21,"Student"]
let [name,age,profession]= biodata;
console.log(age);


// Object Destructing
const bio= {
    name:"Paila",
    age:20,
    role:"student"
}
console.log(bio.name);

//  Arrow function 
 
// Traditional way
function add(a,b){
    console.log(a+b);
}
add(5,6);

// Arrow function 

const ad = (a,b) =>{
    console.log(a+b);
}
ad(4,3);

//  math Tables
const fun = (x)=>{
    for(let i=0;i<=20;i++){
        console.log(`${x} * ${i} =${i*x}`);
    }
}
fun(2);


// Promises: it is a way to handle asynchronous operations in JavaScript.

let Promises = new Promise((resolve,reject) => {
    let success=true;
    if(success){
        console.log("success");
    }
    else{
        reject("Error!");
    }
})
Promises.then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);

})



// ---------------------------------------------------
let play=new Promise((resolve,reject) => {
    let internet=false;
    if(internet){
        resolve("Internet is working");

    }
    else{
        reject("Internet is not working");
    }

})

play.then(msg => {
    console.log(msg);

 }).catch(error =>{
    console.log(error);
 })

// ! Async/Await  
// we are able to write asynchronous code in a synchronous manner
async function fetchdata()
{
    try{
        let response= await fetch("https://jsonplaceholder.typicode.com/users");
        let data= await response.json();
        console.log(data[3]);
    }
    catch(error){
        console.log(error);
    }
}
fetchdata();

// -------------------------------------------
// Fetch API
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {
    console.log(data[4].phone);

})
.catch(error => {
    console.log("Error",error);
})


// !  working with JSON : JS Object Notation

// JSON is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate.

const stud ={
    name : "Murali paila",
    age: 21
}

// converting object to JSON
const json =JSON.stringify(stud);
console.log("Json is:",json);

// Convert JSON to object
const jobj = JSON.parse(json);
console.log(jobj);


