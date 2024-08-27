let obj1 ={
    name: "siva",
    roll:"5A4",
}
let obj2 ={
    name:"siva",
    roll:"5",
    Course : "Mern",
    inst : "QT"
}
function CountNumberOfProperties(obj){
    let count= 0
    for (key in obj){
        count+=1;
   
    }
    return count
}
let val= CountNumberOfProperties(obj2);
console.log(val)


