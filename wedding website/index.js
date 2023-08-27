
const nkarner = [
    "https://i.pinimg.com/originals/56/26/da/5626da0e582372e85f1dc39edd7da1e8.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_KZWK3AGTWVVdm_nVvRt1Throc-9lnqLDkQ&usqp=CAU",
    "https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg?auto=compress&cs=tinysrgb&w=600"
];

let currentImageIndex = 0;
const slide = document.getElementById("slide");
const dotContainer = document.querySelector(".dot-container");

function araj() {
    changeImage(1);
}

function het() {
    changeImage(-1);
}

function showCurrentImage() {
    slide.innerHTML = `<img class="img_slide" src="${nkarner[currentImageIndex]}"></img>`;
    updateDots();
}

function updateDots() {
    dotContainer.innerHTML = nkarner.map((_, i) => `<span class="dot ${i === currentImageIndex ? 'active' : ''}" onclick="changeImage(${i - currentImageIndex})"></span>`).join('');
}

function changeImage(offset) {
    currentImageIndex = (currentImageIndex + offset + nkarner.length) % nkarner.length;
    showCurrentImage();
}

showCurrentImage();
setInterval(araj, 10000);
