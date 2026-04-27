

// ! how to send html , json , js etc type of data .

let http = require("http")
let fs = require("fs")

let server = http.createServer((req,res)=>{


    // ! json data sending

    //  fs.readFile("products.json","utf-8",(err,data)=>{

    //     if(err) throw err;

    //     res.end(data);
    //  })

    // ! html type of data 

     fs.readFile("index.html","utf-8",(err,data)=>{

        if(err) throw err;

        res.end(data);
     })
})

server.listen(5000,(err)=>{
    if(err) throw err;
    console.log('server is running on port 5000')
})