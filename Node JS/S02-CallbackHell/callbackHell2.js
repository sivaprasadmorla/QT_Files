function x1(){
    console.log("x1 is called")
}
function x2(x1callback){
    console.log("x2 is called")
    x1callback()
}
function x3(x2callback){
    console.log("x3 is called")
    x2callback(x1)
}
function x4(x3callback){
    console.log("x4 is called")
    x3callback(x2)
}
function x5(x4callback){
    console.log("x5 is called")
    x4callback(x3)
}
function x6(x5callback){
    console.log("x6 is called")
    x5callback(x4)
}
function x7(x6callback){
    console.log("x7 is called")
    x6callback(x5)
}

x7(x6)