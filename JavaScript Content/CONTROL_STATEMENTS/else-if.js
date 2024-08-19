function printSmallest(x,y,z){
    if (x < y){
        if (x < z){
            console.log("x is smallest")

        }
        
    }
    if (y < z){
        if (y < x){
            console.log ("y is smallest")
        }
    }
    if (z< x){
        if (z < y){
            console.log("z is smallest")
        }
    }

    
}
printSmallest(10,20,40)
printSmallest(50,20,40)
printSmallest(50,20,10)
