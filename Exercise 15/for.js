

// >Exercise  For of loop & for in loop


const people =[

        { name:"mohamud" , age:21 , city:"Galkio" } ,
        { name:"siciid" , age:30 , city:"Garawe"  } ,
        { name:"naima" , age:19 , city:"mogadisho" }
]



for(let person of people){

        console.log("name:" , person.name);
        console.log("age:" , person.age);
        console.log("city:" , person.city);
        console.log("---")
}


