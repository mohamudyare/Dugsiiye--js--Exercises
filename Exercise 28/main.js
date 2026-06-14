

// Async/await


function fetchUserData(){

    return new Promise((resolve , reject)=>{

            setTimeout(()=>{

                        const success = true;

                        if(success){
                                resolve({name:"mohan" , id:124 , city:"mudug"})
                        }else{
                                reject("Failed fetch user data")
                        }
            },2000)

    })

}





async function displayUserData(){


    try{
        const user = await fetchUserData();
        console.log(user);
    } catch(err){
                console.log(err);
    }
}


displayUserData();