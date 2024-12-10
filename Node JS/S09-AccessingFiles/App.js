const { log } = require("console")
const http = require("http")
const fs= require("fs")
const server = http.createServer((req,res)=>{
    if(req.url==="/"){
        fs.readFile("./public/Home.html","utf-8",(error,content)=>{
            if(error){
                res.end("Error while accessing the data")
            }
            else{
                res.end(content)
            }
        })
    }
    else if (req.url === "/Profile"){
        fs.readFile("./public/Profile.html","utf-8",(error,content)=>{
            if(error){
                res.end("Error while accessing the data")
            }
            else{
                res.end(content)
            }
        })
    }
    else if(req.url === "/Products"){
        fs.readFile("./public/Products.html","utf-8",(error,content)=>{
            if(error){
                res.end("Error while accessing the data")
            }
            else{
                res.end(content)
            }
        })
    }
    else if(req.url === "/Contact"){
        fs.readFile("./public/contact.html","utf-8",(error,content)=>{
            if(error){
                res.end("Error while accessing the data")
            }
            else{
                res.end(content)
            }
        })
    }
    else{
        res.end("<h2>Page not found</h2>")
    }
})

server.listen(5675,()=>{
    console.log("server Started");
    
})