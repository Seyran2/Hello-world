let nkarner = [
    "https://i.pinimg.com/originals/56/26/da/5626da0e582372e85f1dc39edd7da1e8.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_KZWK3AGTWVVdm_nVvRt1Throc-9lnqLDkQ&usqp=CAU",
    "https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg?auto=compress&cs=tinysrgb&w=600"
];

let currentImageIndex = 0;

function araj() {
    currentImageIndex = (currentImageIndex + 1) % nkarner.length;
    showCurrentImage();
}

function het() {
    currentImageIndex = (currentImageIndex - 1 + nkarner.length) % nkarner.length;
    showCurrentImage();
}

function showCurrentImage() {
    document.getElementById("slide").innerHTML = `<img class="img_slide" src="${nkarner[currentImageIndex]}"></img>`;
}
araj();
setInterval(araj, 10000);