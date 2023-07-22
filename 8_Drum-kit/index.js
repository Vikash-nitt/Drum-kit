// document.querySelector("button").addEventListener("click",handleClick);  //using handleClick()...it executes directly...it will not take time of click on button.
// function handleClick(){
//     alert("I got clicked!");
// }

//Instead of above syntax we can write it as..............
// document.querySelector("button.w").addEventListener("click",function (){
//     alert("I got clicked!");
// }
// );

//instead of writing it again and again for the different buttons..........we can use loop
var NumberOfDrumButtons = document.querySelectorAll(".Drum").length;
for (var i = 0; i < NumberOfDrumButtons; i++) {

    document.querySelectorAll(".Drum")[i].addEventListener("click", function () {
        //this.style.color="white";//this identity the button that triggered the event
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    }
    );

}
//events by keyboard
// document.addEventListener("keypress", function (event) {
//     console.log(event); //it will tell keyboard events
// });
document.addEventListener("keypress",function (event){
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;


        default: console.log(key);

    }
}
//Adding Animation to the websites...........................
function  buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}

// How to play sounds on Websites.....
// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();
