var arr =[0,10,20,30]
let newArr = arr.filter((element,index)=>{
    return element %2==0
})
console.log(newArr)


var products = [{
    brandName:"Apple",
    modelName:"iphone 15 pro max",
    price:170000
},

{
    brandName:"Smasung",
    modelName:"iphone 15 pro max",
    price:170000
},

{
    brandName:"Apple",
    modelName:"iphone 16 pro max",
    price:130000
},

{   brandName:"Apple",
    modelName:"iphone 14 pro max",
    price:170000},
    
    {
        brandName:"Oppo",
    modelName:"Oppo A 31",
    price:170000
    }]

let newProduct = products.filter((element)=>{
    return  element.brandName === 'Apple'
})

console.log(newProduct)
