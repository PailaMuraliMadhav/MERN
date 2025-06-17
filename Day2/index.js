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
