// MAP -
// it creates an array from an existing array by applying a function to each element of existing array.
const  num =[1,2,3,4];
const mul = num.map((item)=>{
    
    return item*2;
})
console.log(mul);

// FILTER -
// select elements based on a condition and returns a array.

const n=[20,30,50,70,90];
const filter= n.filter(score => score >= 50)


console.log(filter);

// REDUCE -
// it reduces an array to a single value by applying a function to each element of the array.

const g=[10,20,30,40];
const sum= g.reduce((acc,item) =>{
    return acc+item;
}, 0);
console.log(sum);

// synchronus - tasks run one after another/ 
// asynhchronus - tasks don't wait ,they run in the background(like API calls)

// Template literals-
var person = "BAT";
var per= "MAN"
console.log(` He is ${person}${per}`);


console.log(2);
setTimeout(() => console.log("GG"),0);
console.log("AMn");
setTimeout(() => console.log("HI"),0);
console.log(1);
console.log("Okkay");



console.log("start");
setTimeout(() => {
    console.log("Timeout");
},0);

Promise.resolve().then(() =>
   console.log("Promise")
);
console.log("End");



