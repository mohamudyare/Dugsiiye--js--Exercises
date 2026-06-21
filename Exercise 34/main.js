


const list = document.querySelector('#list');




// add item

function   additem(){

    const newitem = document.createElement('li');

    newitem.textContent = "Geedi";

    list.appendChild(newitem);
}






// remove item

function  removeitem(){


    if(list.lastChild){
             list.removeChild(list.lastChild)
    }
   
}

