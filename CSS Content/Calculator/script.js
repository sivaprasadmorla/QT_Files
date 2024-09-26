 var result = ""
function calculate(val){
    var inputDomelement = document.querySelector("input") ;
    if (val === 'c'){
        result =""
        inputDomelement.value = result;
        return;
    }
    if (val === 'x'){
        result= result.slice(0,-1);
        inputDomelement.value = result;
        return
    }
    if (val === '='){
        try{
            result= eval(result).toString()
        }catch(error){
            result = "Error"
        }
        inputDomelement.value = result;
        return
    }
    result+=val
    inputDomelement.value = result
     
}

document.addEventListener("keydown", (event)=>{
    var key = event.key

    if ((key >= 0 && key <= 9) || key ===  "."){
        calculate(key)
    }
    else if (key ==="+" || key === "-" || key === "*" || key === "/" || key === "%" ){
        calculate(key)
    }
    else if (key === "Backspace"){
        calculate('x')
    }
    else if (key === "=" || key === "Enter"){
        event.preventDefault();
        calculate('=')
    }
    else if (key === "c" || key === "C"){
        calculate('c')
    }
    
})