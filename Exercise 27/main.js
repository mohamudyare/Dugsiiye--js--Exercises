

// introduction to promise


function fetchUserData(){

        return new Promise((resolve , reject)=>{

                setTimeout(()=>{

                        const success = true;

                        if(success){
                                resolve({name:"mohamud" , id:"12rt" , city:"mudug"})
                        }else{
                                reject("Failed fetch user data")
                        }
                },2000)
        })
}



fetchUserData()
    .then((data)=> console.log("user data" , data))
    .catch((error)=> console.log("Erro" , error))

