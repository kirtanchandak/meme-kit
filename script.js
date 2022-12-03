// Detecting Button Press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i =0; i<numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML) = this.innerHTML;
         
    })
}  

// Detecting key Press

function makeSound(key) {
    switch(key) {
        case "a":
        var audio = new Audio('memesound/ashneer.mp3');
        audio.play(); 
        break;

        case "g":
        var audio = new Audio('memesound/gajab.mp3');
        audio.play(); 
        break;

        case "s":
        var audio = new Audio('memesound/amit.mp3');
        audio.play(); 
        break;

        case "d":
        var audio = new Audio('memesound/waah.mp3');
        audio.play(); 
        break;

        case "j":
        var audio = new Audio('memesound/kuchbhi.mp3');
        audio.play(); 
        break;

        case "k":
        var audio = new Audio('memesound/zor.mp3');
        audio.play(); 
        break;

        case "l":
        var audio = new Audio('memesound/abhi.mp3');
        audio.play(); 
        break;

     } 
}

document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    
});



 


