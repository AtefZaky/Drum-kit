let buttons = document.querySelectorAll(".drum");
const makeSound = (key)=>{
  switch (key){
    case "w":
      let tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
    case "a":
      let tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
    case "s":
      let tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
    case "d":
      let tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
    case "j":
      let snare = new Audio("./sounds/snare.mp3");
      snare.play();
    case "k":
      let crash = new Audio("./sounds/crash.mp3");
      crash.play();
    case "l":
      let kickBass = new Audio("./sounds/kick-bass.mp3");
      kickBass.play();
    default: console.log(key);
  }
}
const buttonAnimation = (currentKey) =>{
  let activeButton = document.querySelector("."+ currentKey);
  activeButton.classList.add("pressed");
  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 100);
}

buttons.forEach((btn)=>{
  btn.addEventListener("click" , ()=>{
    let buttonInnerHTML = btn.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
});

document.addEventListener("keydown" , (e)=>{
  makeSound(e.key);
  buttonAnimation(e.key);
})