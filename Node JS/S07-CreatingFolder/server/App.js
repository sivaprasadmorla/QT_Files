const http = require("http")
const fs = require("fs")

function createFolder(res){
    fs.mkdir("./NodeJs",(error)=>{
        if(error){
            res.end("<h1>Failed to create Folder</h1>")
        }else{
            res.end("<h1>Folder is created</h1>")
        }
    })
}

function deleteFolder(res){
    fs.rmdir("./NodeJs",(error)=>{
        if(error){
            res.end("<h1>Failed to remove Folder</h1>")
        }else{
            res.end("<h1>Folder is removed successfully</h1>")
        }
    })
}

const server = http.createServer((req,res)=>{
        res.setHeader("Access-Control-Allow-Origin","*")
        if(req.url === "/create"){
            createFolder(res)
        }else{
            deleteFolder(res)
        }
});


server.listen(3636,()=>{
    console.log("server started")
})