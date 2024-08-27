

// Call Back Function Example

// function fn(x){
//    console.log(x());
// }

// fn(function fn1(){     //------> Call Back Function
//     let a=10;
//     let b=20;
//     let c = a+b;
//     return c
// })

// fn is the Higher Order Function .
//  fn1 is the Call Back Function.





let res = (val) =>{
    console.log(val);

}
res(function(){
    console.log("hello")
});
