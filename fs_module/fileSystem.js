

   let fs =  require("fs")

//    console.log(fs)

//  !   1. read data from any file 

    //?  syntax  =>       fs.readFileSync("path","utf-8")

      let data  =   fs.readFileSync("./notes.md")

      console.log(data)                 // buffer data
      console.log(data.toString())     // original data

      let data2 = fs.readFileSync("notes.md","utf-8")
      console.log(data2)            // original data 

      let htmlData = fs.readFileSync("index.html","utf-8")
      console.log(htmlData)

      let cssData = fs.readFileSync("styles.css","utf-8")
      console.log(cssData)


// ! 2.  create file 


      //?  syntax  =>       fs.writeFileSync("path","utf-8")

     fs.writeFileSync("about.txt","this is text file i am creating from js")
     console.log("file created")

// ! 3. rename file 

        //?  syntax  =>       fs.renameSync("path","utf-8")
        
        fs.renameSync("about.txt","contact.txt")
        console.log("file rename done")
        
// ! 4. delete file 
        
        //?  syntax  =>       fs.unlinkSync("path","utf-8")
        
        fs.unlinkSync("contact.txt");
        console.log("file deleted")
        
// ! 5. append data 
        
        //?  syntax  =>       fs.appendFileSync("path","data we want to append")
        
        // fs.appendFileSync("notes.md"," this is extra data");
        // console.log("data appended")
        
        
// ! 6. create folder 
        
        //?  syntax  =>       fs.mkdirSycn("folder path")
        
    
      //  fs.mkdirSync("controllers")
      //  console.log("folder created")


      //todo: how to create file inside folder 

         // fs.writeFileSync("./routes/authRoute.js","console.log('hi')")
         // console.log("file created inside folder")

// !  7. rename folder 

         //?  syntax  =>       fs.renameSync("oldfolder","newname of folder")
 
         //   fs.renameSync("controllers","routes")
         //   console.log("rename done")

// ! 8. delete folder 

     
   //  fs.rmdirSync("middleware")
   //  console.log('folder deleted')


