document.addEventListener("DOMContentLoaded", function(){
    const title = document.querySelector("#change");
    const displayText = document.querySelector("#paragraph");
    const select = document.querySelector("#texts");
    const userInput = document.querySelector("#textField");
    const changeBannerButton = document.querySelector(".banner"); 
    const box1 = document.querySelector('.box1');
    const uploadInput = document.querySelector('#inputPic');
    
    changeBannerButton.addEventListener("click", function(e){
        e.preventDefault();
        if (userInput.value.trim() === "") {
            alert('Update your text🫵🏽');
        } else{
            if (select.value==='paragraph') {
                displayText.textContent=userInput.value 
            } 
    
            if (select.value==='header') {
                title.textContent=userInput.value
            }
        }

        // To change/replace background image
          if (uploadInput.files && uploadInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) {
              box1.style.backgroundImage = `url('${e.target.result}')`;
            };
            reader.readAsDataURL(uploadInput.files[0]);
          }

        //   To empty-out input fields after banner update
          userInput.value = "";
          uploadInput.value = "";
    })
 
 })

     //  DAY/NIGHT TOGGLE
     const nightButton = document.querySelector(".day");
     const background = document.querySelector(".bodycolor"); 

     nightButton.addEventListener("click", function() {
        background.classList.toggle("dark-mode");
    
        console.log(nightButton);
    });




