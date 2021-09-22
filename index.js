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


for(let i = 0; i < amountOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
       
        let buttonHTML = this.innerHTML; 

        switch(buttonHTML) {
            case "w":
                let tom1 = new Audio('/sounds/tom-1.mp3');
                tom1.play(); 
            break;

            case "a":
                let tom2 = new Audio('/sounds/tom-2.mp3');
                tom2.play();
            break;
            
            case "s":
                let tom3 = new Audio('/sounds/tom-3.mp3');
                tom3.play();
            break;

            case "d":
                let tom4 = new Audio('/sounds/tom-4.mp3');
                tom4.play();
            break;

            case "j":
                let snare = new Audio('/sounds/snare.mp3');
                snare.play();
            break;

            case "k":
                let crash = new Audio('/sounds/crash.mp3');
                crash.play();
            break;

            case "l":
                let kick = new Audio('/sounds/kick-bass.mp3');
                kick.play();
            break;

            default:
                console.log(buttonHTML);
        }
      });
}


