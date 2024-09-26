var promiseObject = new Promise((resolve,reject)=>{

    resolve({
        name:"siva",
        id :101,
        address: "hyd"
    })

})

promiseObject.then((successdata)=>{
    console.log(successdata.address)
})



