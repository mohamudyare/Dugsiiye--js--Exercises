




// 1) Spread operator

const number = [1,2,3];

const AllNumber = [...number , 4 , 5 , 6];

console.log(AllNumber);








// 2) Rest operators

function multiply(...number){

    return number.reduce((total , num) => total * num);

}


console.log(multiply(20,5));





