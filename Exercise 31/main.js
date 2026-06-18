

// HTTP GET method


async function fetchData(){

    console.log("starting fetching Data");

    try{

        const response = await fetch('https://jsonplaceholder.typicode.com/users');


        if(!response.ok){
                    throw new Error(`HTTP Error!: &{response.status}`)
        }


        const data = await response.json();

        console.log(data);

    }catch(error){
                console.log(error)
    }
}


fetchData()