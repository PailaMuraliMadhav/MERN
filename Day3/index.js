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

