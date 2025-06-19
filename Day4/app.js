const http =require('http'); //http is a module that provides functions for creating http servers
const server = http.createServer((req,res) => {                 // req is the request object, res is the response object
    
    res.end("Server is running");
})

server.listen(4000,() => 
{
    console.log("server is running at https://localhost:4000");
})
