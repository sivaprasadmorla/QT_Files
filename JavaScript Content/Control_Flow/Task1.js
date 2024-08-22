let val =1
function fn(val){
    
    console.log(val);
    if (val < 10){
        fn(val+1) 
    }
    else{
        return 0
    }
}
fn(val)