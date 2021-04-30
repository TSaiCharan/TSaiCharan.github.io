var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var h3=document.querySelector("h3");
var h4=document.querySelector("h4");
var body=document.getElementById("b");
h3.innerHTML="Welcome";
function setColor(){
    body.style.background="linear-gradient(to right,"+color1.value+" , "+color2.value+")";
    h3.innerHTML="color1 : "+color1.value;
    h4.innerHTML="color2 : "+color2.value;
}
color1.addEventListener("input",setColor)
color2.addEventListener("input",setColor)
