var Student={
    id:101,
    name:"Siva",
    Email:"sivaprasadmorla@gmail.com",
    mob_no:92873737,
};

console.log(Student);
console.log(Student.name);
console.log(Student.Email);
console.log(Student.mob_no);

var product={
    name:"Oppo",
    model:'A31',
    price:15000,
    processor:"Helio G30",
}

console.log(product);

product['id']= 101;

console.log(product);

product.price=16000;
console.log(product);

delete product['id']
console.log(product);

// const func = (x,y=x) => x+y;
// console.log(func(5));
// console.log(1<2<3<4)
