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