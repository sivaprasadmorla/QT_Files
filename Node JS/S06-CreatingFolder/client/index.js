const createFolder = ()=>{
    fetch("http://localhost:5656").then((res)=>{

        return res.json()

    }).then((data)=>{
        alert("Folder Created")
    }).catch((error)=>{
        alert("error while sending the request")
    })
}