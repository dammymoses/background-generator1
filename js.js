let body=document.querySelector('body');
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let css =document.querySelector(".css");

eventListener();

function eventListener(){
    
    color1.addEventListener("input",changeColor)
    color2.addEventListener("input",changeColor)
}

function changeColor(){
    body.style.background ="linear-gradient(" +"to right,"+ color1.value+","+ color2.value+ ")";
    css.textContent =  body.style.background;
}