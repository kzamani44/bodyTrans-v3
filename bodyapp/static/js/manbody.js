/* DECLARE ALL VARIABLES TO BE USED */

// Select all parts of the body
var parts = document.querySelectorAll("a");

// Get the modal background
var modalBg = document.getElementById("modal-bg");

// Close button script
var closeBtn = document.getElementById("modal-close");

// Get text for translation
var engTxt = document.getElementById('eng-text');
var yorTxt = document.getElementById("yor-text");

// Loop through each part and applies the click attribute
for(let i = 0;i<parts.length;i++){
    var part = parts[i];
    console.log(part);
    
    if(part.getAttribute('id') == 'leg'){
        part.addEventListener("click",() =>{
            modalBg.classList.add('modal-view');
            engTxt.innerHTML = "Left Leg";
            yorTxt.innerHTML = "ẹsẹ";
            frTxt.innerHTML = "pieds";
            gerTxt.innerHTML = "das Bein"
        });
    }
    else if(part.getAttribute('id') == 'hand'){
        part.addEventListener("click",() =>{
            modalBg.classList.add('modal-view');
            engTxt.innerHTML = "Hand";
            yorTxt.innerHTML = "ọwọ";
            frTxt.innerHTML = "main";
            gerTxt.innerHTML = "der Arm"
        });
    }
    else if(part.getAttribute('id') == 'chest'){
        part.addEventListener("click",() =>{
            modalBg.classList.add('modal-view');
            engTxt.innerHTML = "Chest";
            yorTxt.innerHTML = "igbaya";
            frTxt.innerHTML = "poitrine du corps";
            gerTxt.innerHTML = "Haar"
        });
    }
    else if(part.getAttribute('id') == 'head'){
        part.addEventListener("click",() =>{
            modalBg.classList.add('modal-view');
            engTxt.innerHTML = "Head";
            yorTxt.innerHTML = "ori";
            frTxt.innerHTML = "la tête";
            gerTxt.innerHTML = "der Kopf"
        });
    }
    else if(part.getAttribute('id') == 'neck'){
        part.addEventListener("click",() =>{
            modalBg.classList.add('modal-view');
            engTxt.innerHTML = "Neck";
            yorTxt.innerHTML = "ọrun";
            frTxt.innerHTML = "Cheveu";
            gerTxt.innerHTML = "der Hals"
        });
    }
    else if(part.getAttribute('id') == 'face'){
        part.addEventListener("click",() =>{
            modalBg.classList.add('modal-view');
            engTxt.innerHTML = "face";
            yorTxt.innerHTML = "ẹsẹ osi";
            frTxt.innerHTML = "Cheveu";
            gerTxt.innerHTML = "der Hals"
        });
    }
}



// Close button function
closeBtn.addEventListener("click",function(){
    modalBg.classList.remove("modal-view");
});