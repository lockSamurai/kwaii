function mudar() {
if (texto.style.color == "red")
texto.style.color = "blue";
else
texto.style.color = "red";
}

texto.addEventListener("click", mudar);

const img = document.getElementById("foto");
const images = ["ghostofmadruga.jpg", "bf1.jpg"];
let currentIndex = 0;

setInterval(function() {
currentIndex = (currentIndex +1) % images.length;
img.src = images[currentIndex];
},3000);
