// To change background color
const changeBannerButton = document.querySelector(".banner"); 
const background = document.querySelector(".bannerBox"); 

changeBannerButton.addEventListener("click", function () {
    const color = document.querySelector("#favcolor").value; 
    background.style.backgroundColor = color; 
});



// To change texts
document.addEventListener("DOMContentLoaded", function(){
    const userInput = document.querySelector("#textField");
    const displayText = document.getElementById("displayText");
    const changeTextButton = document.querySelector(".text");
    
    changeTextButton.addEventListener("click", function(e){
        e.preventDefault
        if (userInput.value.trim() !== "") {
            displayText.textContent = userInput.value;
        } else {
            alert("PLEASE ENTER TEXT!!");
        }
    })
 })



// To switch images
const button = document.querySelector(".image");
const displayPic = document.querySelector(".jollofPic"); 
const picInput = document.querySelector("#inputPic");

button.addEventListener("click", function() {

    if (picInput.files && picInput.files[0]) {
        const reader = new FileReader();

        reader.onload = function(e) {
            displayPic.src = e.target.result;
        };

        reader.readAsDataURL(picInput.files[0]);
    } else {
        alert("Please select a valid picture!");
    }
});



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