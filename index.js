// alert("hello"); -> to check if it's linked

//make buttons work: addEventListener
/*
document.querySelector("button").addEventListener("click", handleClick) //-> only triggers the 1st button to check if it works. "click" is the 1st param and needs to be a string and is case-sensitive (check documentation). 2nd param is a listener and usually is a JS function that is called in the event

function handleClick() {
    alert("I got clicked!");
} 

//another way to write the function and more commum is with anonymous function:
document.querySelector("button").addEventListener("click", function(){
  alert("I got clicked!");  
}) */

//All working, let's do the same for all buttons
let amountOfDrumButtons = document.querySelectorAll(".drum").length;
let audio = new Audio('/sounds/tom-1.mp3');

for(let i = 0; i < amountOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
         audio.play();
      });
}