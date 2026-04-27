

// what is http

//! what are the http methods 

        // GET: Used to retrieve data from a server. It is a "safe" method, meaning it should only read data and not change the server's state.
        // POST: Used to create a new resource. The data is included in the request body, and it is considered "unsafe" because it changes server state.
        // PUT: Used to replace an existing resource or create it if it doesn't exist. It requires sending the full representation of the resource.
        // PATCH: Used for partial updates. Unlike PUT, it only modifies specific fields of a resource rather than replacing the whole thing.
        // DELETE: Used to remove a specific resource from the server.

//! what are the http status codes 

        // Informational responses (100 – 199)
        // Successful responses (200 – 299)
        // Redirection messages (300 – 399)
        // Client error responses (400 – 499)
        // Server error responses (500 – 599)


                //!   how to create server 


// ! step 1 : import http module

let http = require("http");

// console.log(http)

//! step 2 : create server 

let server = http.createServer((req,res)=>{

    // setting the header 

    res.writeHead(200,'ok',{'content-type':"text/normal"})

    res.end("server is sending hi")
})


// ! step 3 : run the server in some port 

let PORT = 5000;
server.listen(PORT,(err)=>{

    if(err) throw err;

    console.log("our server is running on port 5000")
})