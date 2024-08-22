let produName = "Oppo";
let products = ["samsung", "macbook", "vivobook","Trimmer","Oppo"]

products.forEach((element,index)=>{

    if (produName == element){
        console.log(index)
    }
})


//  Implement a function to find designation of an employee based on the data

//  0-2 : Junior Dev   2.1 - 5 : Senior Dev  5.1 -7  : Team lead  7.1 - 9 : project manager  9 and above : Architect

var exp = 3
if (exp >=0 && exp <=2){
    console.log("Junior Devloper")
}
else if (exp >2 && exp <=5){
    console.log("Senior Devloper")
}
else if (exp >5 && exp <=7){
    console.log("Team Lead")
}
else if (exp > 7 && exp <=9){
    console.log("Project Manager")
}
else{
    console.log("Architect")
}


// If the brandName is Apple then we have print the details of that brandName
var product = [{
    brandName:"Apple",
    modelName:"iphone 15 pro max",
    price:170000
},

{
    brandName:"Smasung",
    modelName:"Samsung 15 ultra max",
    price:170000
},

{
    brandName:"Vivo",
    modelName:"Vivo 16 ",
    price:130000
},

{   brandName:"Oneplus",
    modelName:"Oneplus 14 ",
    price:170000},
    
{
    brandName:"Oppo",
    modelName:"Oppo A 31",
    price:170000
}]

product.forEach((element,idex)=>{
    if (element.brandName === "Apple"){
        console.log(`The BrandName is ${element.modelName}`);
        console.log(`The price is ${element.price}`)

    }
})