const http = require("http");
const fs = require("fs")

let server=http.createServer((req,res)=>{
    fs.mkdir("./CSS",(error)=>{
        if(error){
            res.end("Error while creating a server")

        }
        else{
            res.end("Folder is created")
        }
    })
})

// let server=http.createServer((req,res)=>{
//     fs.mkdir("./HTML",(error)=>{
//         if(error){
//             res.end("Error while creating a server")

//         }
//         else{
//             res.end("Folder is created")
//         }
//     })
// })

// let server=http.createServer((req,res)=>{
//         res.end("<h1>My First Response to Client</h1>")
// })

server.listen(5656,()=>{
    console.log("Server is started");
    
})