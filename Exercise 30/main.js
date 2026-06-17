


// Callback


function operate(a,b , Callback){

    return Callback(a,b);

}


function  add(a,b){
     
    return a + b;
}


function subtract(a,b){

    return a - b;
}


function Multiply(a,b){

    return a * b;
}



function Divide(a,b){

    return a / b;
}





console.log("Addition " , operate(6,4 , add));

console.log("Subtract " , operate(20,7 , subtract));

console.log("Multiply " , operate(5,8 , Multiply));

console.log("Divide " , operate(50,2 , Divide))



