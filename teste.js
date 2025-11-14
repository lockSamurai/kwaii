const img= document.getElementById("foto");

img.addEventListener("mouseenter", () => img.classList.add("is-expanded"))
img.addEventListener("mouseleave", () => img.classList.remove("is-expanded"))