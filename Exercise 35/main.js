

// change image

function changeimage(){

    const image  = document.querySelector('#image');


    const url = prompt("please enter your image");
    image.setAttribute('src' , url);


    const borderColor = prompt("please enter your border color");
    image.style.border =  `4px solid ${borderColor}`;

    
    const width = prompt("please Enter your width");
    image.style.width =  `${width}px`;


    const height = prompt("please enter your Height");
    image.style.height =   `${height}px`;


    const borderRadius = prompt("please to you border radius");
    image.style.borderRadius = `${borderRadius}px`

  
}