
// ! step 1 : import http module 

let http = require("http")
let fs = require("fs")


// ! step 2 : create server 

let server =  http.createServer((req,res)=>{

    //! step 4: create routing . 

    if(req.url=="/")
    {
        res.end("welcome to my server")
    }
    else if(req.url=="/about")
    {
            fs.readFile("about.html","utf-8",(err,data)=>{
                    if(err) throw err;

                    res.end(data);
            })
           
    }
    else if(req.url=="/home")
    {
          fs.createReadStream("home.html").pipe(res);
           
    }
    else if(req.url=="/contact")
    {
              fs.createReadStream("contact.html").pipe(res);
    }
    else{
              fs.createReadStream("notfound.html").pipe(res);
    }
    
})


// ! step 3 : run the server 

server.listen(5000,(err)=>{
    if(err) throw err;
    console.log("server is running")
})