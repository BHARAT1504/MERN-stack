var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

$(document).keypress(function (event) {
  if (level == 0) {
    getRandomNumber();
  }

});

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

$(".btn").click(function () {
  var userChosenColourid = $(this).attr("id");
  userClickedPattern.push(userChosenColourid);
  playSound(userChosenColourid);
  animatePress(userChosenColourid);
  checkAnswer(userClickedPattern.length - 1);
});

function getRandomNumber() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);

  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function animatePress(currentColour) {
  var color = "#" + currentColour;
  $(color).addClass("pressed");
  setTimeout(function () {
    $(color).removeClass("pressed");
  }, 100);
}
function startOver() {
  level = 0;
  gamePattern = [];
}

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (gamePattern.length === userClickedPattern.length) { // checked completely 
      setTimeout(function () {
        getRandomNumber();
      }, 1000);
    }
  }
  else {
    playSound("wrong");
    $("#level-title").text("Game Over, Press Any Key to Restart");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    startOver();
  }
}

