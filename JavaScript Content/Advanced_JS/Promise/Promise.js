//  Using resolve() function.

// var promiseObj = new Promise((resolve,reject)=>{
//     resolve(
//         {
//             id : 101,
//             name:"siva"
//         }
//     )
// })

// promiseObj.then((successData)=>{
//     console.log("then is executed")
//     console.log(successData)
// })
// .catch((errorData)=>{
//     console.log("failure Data")
//     console.log(errorData)
// })

// using reject() function.

var promiseObj = new Promise((resolve, reject) => {
  reject({
    id: 101,
    name: "siva",
  });
});

promiseObj
  .then((successData) => {
    console.log("then is executed");
    console.log(successData);
  })
  .catch((errorData) => {
    console.log("failure Data");
    console.log(errorData);
  });
