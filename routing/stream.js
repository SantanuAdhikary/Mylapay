

let fs = require("fs")



fs.readFile("server.js","utf-8",(err,data)=>{
    if(err) throw err;

    fs.writeFile("server2",data,(err)=>{
        if(err) throw err;
        console.log("file created")
    })
})