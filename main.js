// To trigger day/night mode
const nightButton = document.querySelector(".day");
const border = document.querySelector(".bannerBox");

nightButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    border.style.border="1px solid white";

    if (document.body.classList.contains("dark-mode")) {

        border.style.border="1px solid white";
    } else {
        border.style.border="1px solid black";
    }
});



// To toggle the two image
const button = document.querySelector(".image");
const box2div = document.querySelectorAll(".box2 img");

// Function to toggle images
button.addEventListener("click", function() {

    box2div.forEach((img) => {
       img.classList.toggle("active");
    });
});



// To toggle texts
const textButton = document.querySelector(".text");
const box1div = document.querySelectorAll(".box1 h4");

// Function to toggle images
textButton.addEventListener("click", function() {

    box1div.forEach((txt) => {
       txt.classList.toggle("rice-sauce-txt");
    });
});



// To change background
const changeBannerButton = document.querySelector(".banner");
const background = document.querySelector(".bannerBox");

changeBannerButton.addEventListener("click", function() {
    background.classList.toggle("dark-mode");

    if (background.classList.contains("dark-mode")) {
        border.style.border="1px solid white";
    } else {
        border.style.border="1px solid black";
    }
});