const backImage = document.querySelector("#bgImage");
const images = ["1.jpg", "2.jpg", "3.jpg"];

const selectedImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.setAttribute("src", `images/${selectedImage}`);

backImage.appendChild(bgImage);
