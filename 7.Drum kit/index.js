const music={
w:"sounds/crash.mp3",
a:"sounds/kick-bass.mp3",
s:"sounds/snare.mp3",
d:"sounds/tom-1.mp3",
j:"sounds/tom-2.mp3",
k:"sounds/tom-3.mp3",
l:"sounds/tom-4.mp3"};
let buttons=document.querySelectorAll(".drum");

buttons.forEach(ele => {
  ele.addEventListener("click",function(){
    handleClick(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
});
function handleClick(key)
{
  var audio= new Audio(music[key]);
  audio.play();
 
}

function buttonAnimation(key)
{
  var activeBtn = document.querySelector("." + key);
  activeBtn.classList.add("pressed");
  setTimeout(function()
  {
    activeBtn.classList.remove("pressed");
  },100);
   
}


document.addEventListener("keypress", function(event){
  handleClick(event.key);
  buttonAnimation(event.key);
});