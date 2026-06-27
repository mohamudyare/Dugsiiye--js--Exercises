
const colorpicker = document.querySelector('#colorpicker');
const colorPreveiw = document.querySelector('#colorPreveiw');
const colorHistory = document.querySelector('#colorHistory')
const ClearHistoryBtn = document.querySelector('#ClearHistoryBtn');


// color changes
colorpicker.addEventListener("input" , function(){

    const selectedcolor = colorpicker.value;
    colorPreveiw.style.backgroundColor = selectedcolor;
    addColorHistory(selectedolor);
})





// add the selected color the history
function  addColorHistory(color){

    const li = document.createElement("li");
    li.textContent = color;
    li.style.color = color;
    // ku xir colorhistory li
     colorHistory.appendChild(li);
}



// clear history
ClearHistoryBtn.addEventListener("click" , function(){

    colorHistory.innerHTML = '';

})
