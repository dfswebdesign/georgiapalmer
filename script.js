function createHeart() {
  var heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "%";
  heart.style.animationDuration = Math.random() * 4 + 2 + "s";

  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  heart.style.color = "#" + randomColor;
  console.log(randomColor);

  heart.innerText = "❤";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}

setInterval(createHeart, 400);
