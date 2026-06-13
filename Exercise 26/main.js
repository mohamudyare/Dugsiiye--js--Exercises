


// 1) Synchronous(Blocking)

function getUserData() {

    alert("Reader user Data");
    return {name:"joseph" , id:"234f" , city:"mogadisho"} ;
}


console.log("Starting read user data");

const user = getUserData();

console.log("user Data" , user);

console.log("this message is blocked until user data is reader");



console.log("--------------")











// 2) Asynchronous(Non-blocking)


function  getUserDataAsync(callback) {

    setTimeout(()=>{
            const user = {name:"mohamud" , id:"H675" , city:"Garawe"};
            callback(user);
    },3000);

}


console.log("starting Asynchronous(Non-Blocking)");

getUserDataAsync( (user)=> {console.log(user)} );

console.log("this is message Non-Blocking");