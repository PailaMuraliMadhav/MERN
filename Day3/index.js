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
console.log(g.sort());