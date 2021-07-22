var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var path1 = "images/dice" + randomNumber1 + ".png";
var path2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", path1);
document.querySelector(".img2").setAttribute("src", path2);

if (randomNumber1 > randomNumber2) {
  $("h1").html("Player 1 Won 🎉");
} else if (randomNumber1 < randomNumber2) {
  $("h1").html("Player 2 Won 🎉");
} else {
  $("h1").html("Draw 🤷‍♂️");
}

$(".btn").click(function () {
  location.reload();
});
