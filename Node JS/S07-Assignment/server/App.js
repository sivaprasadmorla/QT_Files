const http = require("http")
const fs = require("fs")

function createFolder(res,folderName){
   
    fs.mkdir(`./${folderName}`,(error)=>{
        if(error){
            res.end("<h1>Failed to create Folder</h1>")
        }else{
            res.end("<h1>Folder is created</h1>")
        }
    })
}

function deleteFolder(res,folderName){
    fs.rmdir(`./${folderName}`,(error)=>{
        if(error){
            res.end("<h1>Failed to remove Folder</h1>")
        }else{
            res.end("<h1>Folder is removed successfully</h1>")
        }
    })
}

const server = http.createServer((req,res)=>{
        res.setHeader("Access-Control-Allow-Origin","*")
        let urlParts = req.url.split("/");
        let action = urlParts[1]
        let name = urlParts[2]

        if(action === "create"){
            createFolder(res,name)
        }else{
            deleteFolder(res,name)
        }
});


server.listen(3636,()=>{
    console.log("server started")
})