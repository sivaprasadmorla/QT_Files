// Function is a block of code which performs specific task.
// "undefined" ----> It is a special value in Java Script. When a function doesn't return a value it will always return a "undefined".
// return Statement should be the last statement of the function because it will terminate the execution of the function

function fn(){
    console.log("Hello");

}
fn();
 //-----------------------------

function fnWithoutReturn(){
    var x=100;
    
}
var value= fnWithoutReturn();
console.log(value);
//Output is "undefined".

// -----------------------------------
function fnWithReturn(){
    var val=100;
    return val
}
console.log(fnWithReturn());

//-------------------------------------

function fnReturnFn(){
    return function fn(){
        return "hello";

    }
}
var val=fnReturnFn();
console.log(fn()) // ------> Reference Error
console.log(val());  // It will give the output of fn()

// ------------------------------------------------------------------------


