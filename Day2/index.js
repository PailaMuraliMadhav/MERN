// CONTROL STATEMENTS

let marks=90;
if(marks >85){
    console.log("A+");
}
// ---------------------------------------
let we="rainy";
if(we == "Sunny"){
    console.log("Go to beach");
}
else{
    console.log("stay at home!");
}

// ----------------------------------------
let traffic="green";
if(traffic == "red"){
    console.log("STOP");
}else if(traffic == "yellow"){
    console.log("On your marks");
}
else if(traffic == "green"){
    console.log("Go");
}
else{
    console.log("Error !");
}
// ----------------------------------------------

let m=50;
if(m>=90){
    console.log("A")
}
else if(m >= 75){
    console.log("B")
}
else if(m > 40){
    console.log("C")
}
else if(m==40){
    console.log("Pass")
}
else{
    console.log("Fail")
}
// ------------------------------------------------------

//  SWITCH STATEMENT

let option= 6;

switch(option){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3: 
        console.log("Wedneasday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid!");

}

// ----------------------------------------------------

// LOOPS

// 1.FOR LOOP
for(let i=1;i<=7;i++){
    console.log(i);
}
// While Loop
let count =1;
while(count <= 5){
    console.log(count);
    count++;

}

// do while loop
// it will run at least once

let i=1;
do{
    console.log("number: ",i);
    i++;
}while(i >= 5);


// Practice:

console.log("Using for loop");
for(let i=1;i<=10;i++){
    console.log(i);
}
console.log("Using do while loop:");
let j=1;
do{
    console.log(j);
    j++;
}
while(j<=10);

// Jumping Statements:(Break and Continue);
// BREAK: stop the loop immediately if the cond is met.
// CONTINUE: skip the current iteration and continue with the next one.
console.log("---------BREAK STATEMENT---------");
for(let i=1;i<=10;i++){
    if(i==5){
        break;
    }
    console.log(i);                 
}
console.log("---------CONTINUE STATEMENT---------");
for(let j=1;j<=5;j++){
    if(j==3){
        continue;
    }
    console.log(j);
}

let d="Sunday";
if(d=="Sunday"){
for(let k=1;k<=3;k++){
    console.log("Study Subject: ",k);
}
}else{
    let l=1;
    do{
        console.log("Study Subject:",l);
        l++;
    }
while(l<=3);

}

// FUNCTIONS

function greet(name){
    console.log("Hello "+ name);
}
greet("Murali")
greet ("Marnus");

// ------------------------
// Add Two numbers
function add(a,b){
    console.log(a+b);
}

add(2,3);
add(999,100);

function printnumbers(n){
    for(let i=1;i<=n;i++){
        console.log(i);
    }

}
printnumbers(6)



function ab(){
    console.log(a);
    var a=10; //undefined 
    // let a=10 (error: Cannot access 'a' before initialization)
}
ab();

// --------------------------------------------------------------------------------

// Scope: where a variable is accessed or used in the code.- inside the funtion or outside the function.

// #Global Scope: can be accessed anywhere  in the code.
let college= "LPU";
function myclass(){
    let subject="MERN";
    console.log("College: ",college);
    console.log("Subject:",subject);

}

myclass();
// console.log(subject); // ReferenceError as let is a block scope variable.
//even using VAR it shows error as it is not defined outside the function.

// Block Scope 
{
    let pencil="natraj";
    console.log(pencil);
}
// console.log(pencil); // ReferenceError: pencil is not defined
// ------------------------------------------------------------------------------

// Closures: when a function rememmbers the variables from its outer scope even after the outer function has finished executing.
function outer(){
    let name="Murali";
    function inner(){
        console.log("Hello",name);
    }
    return inner;
}
 let gg=outer();
gg();

function counter(){
    let count=0;
    return function(){
        count++;
        console.log("count :",count);
    }
}
let co=counter();
co();
co();


let x=10;
let y=5;
console.log("Enter 1 for Addition, 2 for Subtraction, 3 for Multiplication, 4 for Division");
var z=4;
if(z==1){
    console.log("Addition is: ",x+y);
}
else if(z==2){
    console.log("Subtreaction : ",x-y);

}
else if(z==3){
    console.log("Multiply: ",x*y);
}
else if(z==4){
    console.log("division: ",x/y);
}
else {
    console.log("Invalidd!");
}

