// var toggletwo = document.getElementById("toggle-two");
// var togglethree = document.getElementById("toggle-three");
// var toggleone = document.getElementById("toggle-one");
var toggleall = document.getElementById("toggleall");
var navitem = document.getElementById("navitem");
// var nav = document.getElementById("nav");
var navitem = document.querySelector(".navitem")

function clicks() {

    toggleall.classList.toggle("toogle");
    navitem.classList.toggle("nav");

}