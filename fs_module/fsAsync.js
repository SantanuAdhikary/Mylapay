
let fs = require("fs");

// !  read the file 


   //? syntax:    fs.readFile("path","utf-8",callbackFuction)


 fs.readFile("index.html","utf-8", (err,data)=>{

     if(err)
        throw err;
    console.log(data)
 })



//  ! create file 

fs.writeFile("movie.txt","this movie file",(err)=>{

    if(err)
        throw err;

    console.log("file created")
})

// ! rename file 


fs.rename("movie.txt","songs.txt",(err)=>{
    if(err) throw err;
    console.log('rename done')
})

// ! append 

fs.appendFile("songs.txt"," appended data ",(err)=>{
    if(err) throw err;

    console.log("file appeneded")
})


// ! delete file 

fs.unlink("songs.txt",(err)=>{
    if(err) throw err;
    console.log("file deleted")
})