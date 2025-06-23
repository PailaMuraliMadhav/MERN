// Node js  - is the javascript run time environment.
// run time environment is the environment in which the code is executed.
// module vs package - in module we run by node.js and package is done by npm.
// npm - is the package manager.

// //! create a file 
const fs = require('node:fs');  // ****IMPORTANT*****
//  Modules
/*
const greet =require('./greet');
console.log(greet("Murali"));
*/

/*
fs.writeFile("Hello.txt","How are you ?????",function(err){
    if(err) console.log("Error ",err)
        else( console.log("File created !"))
})  //callback is a function that is called after the execution of the code.
*/
// ! Append a file
/*
fs.appendFile("Hello.txt", "\n This is changed",function(err){
    if(err) console.log("Error",err)
        else (console.log("File appended!"))
})
*/
// Rename  a  file 
/*
fs.rename("Hello.txt","Hello2.txt",function(err){
    if(err) console.log("error",err)
        else(console.log("File renamed!"))
})*/
// Write a file -> this completely erase the previious written and freshly starts
/*
fs.writeFile("Hello2.txt","Hi Murali ",function(err){
    if(err)console.log("Error",err)
        else(console.log("File written"))
})

fs.appendFile("Hello2.txt","\nHow are you ?? ",function(err){
    if(err) console.log("Error",err)
        else(console.log("Appended!"))
})
*/
// Read a File/*
/*
fs.readFile("Hello2.txt",function(err,data){
    if(err) console.log("Error!",err)
        else(console.log(data.toString()))
})

*/

// Deleted a file
/*
fs.unlink("Hello2.txt",function(err){
    if(err) console.log("Error",err)
        else(console.log("File deleted"))
})
*/


// ???????????????????????????????????????????????????????????????//////////
// EXpress.

// import express from 'express'
const express = require('express')
const app = express()
const port=3000;
app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000)