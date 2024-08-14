var products = [
    {
        brandName : "Apple",
        modelName : "Iphone15pro max",
        price : 90000
    },
    
    { brandName : "Apple",
        modelName : "Iphone 14",
        price : 85000
    },
    {
        brandName : "Samsung",
        modelName : "Samsung s24",
        price : 1300000
    },
    {
        brandName : "Samsung",
        modelName : "Samsung A32",
        price : 50000
    },
    {
        brandName : "Oneplus",
        modelName : "Oneplus 14",
        price : 100000
    },
    {
        brandName : "Vivo",
        modelName : "Vivo 14",
        price : 100000
    },
    {
        brandName : "Oppo",
        modelName : "Oppo 14",
        price : 100000
    }
]

// I want all the apple mobiles and price greter than 80000

let res = products.filter((e)=>{
    return (e.brandName =="Apple") && (e.price > 80000)
})

console.log(res)

// I want all data whose brandName not equals to "Apple" and "Samsung"

let result = products.filter((e)=>{
    return (e.brandName !="Apple") && (e.brandName != "Samsung")
})

console.log(result)