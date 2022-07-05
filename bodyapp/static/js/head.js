var parts = document.querySelectorAll("a");
//console.log(parts);
var modalBg = document.getElementById("modal-bg");
var closeBtn = document.getElementById("modal-close");
var engTxt = document.getElementById('eng-text');
var yorTxt = document.getElementById("yor-text");

for(let i = 0;i<parts.length;i++){
    var part = parts[i];
    //console.log(part);
    
    if(part.getAttribute('id') == 'hair'){
        part.addEventListener("click",() =>{
            modalBg.classList.add('modal-view');
            engTxt.innerHTML = "Hair";
            yorTxt.innerHTML = "irun";
        });
    }
    else if(part.getAttribute('id') == 'nose'){
        part.addEventListener("click",() =>{
            modalBg.classList.add('modal-view');
            engTxt.innerHTML = "Nose";
            yorTxt.innerHTML = "imu";
        });
    }
    else if(part.getAttribute('id') == 'eyebrows'){
        part.addEventListener("click",() =>{
            modalBg.classList.add('modal-view');
            engTxt.innerHTML = "Eyebrow";
            yorTxt.innerHTML = "irun oju";
        });
    }
    else if(part.getAttribute('id') == 'eyes'){
        part.addEventListener("click",() =>{
            modalBg.classList.add('modal-view');
            engTxt.innerHTML = "Eyes";
            yorTxt.innerHTML = "oju";
        });
    }
    else if(part.getAttribute('id') == 'teeth'){
        part.addEventListener("click",() =>{
            modalBg.classList.add('modal-view');
            engTxt.innerHTML = "Teeth";
            yorTxt.innerHTML = "Eyin";
        });
    }
    else if(part.getAttribute('id') == 'ears'){
        part.addEventListener("click",() =>{
            modalBg.classList.add('modal-view');
            engTxt.innerHTML = "Ears";
            yorTxt.innerHTML = "etí";
        });
    }
    else if(part.getAttribute('id') == 'tongue'){
        part.addEventListener("click",() =>{
            modalBg.classList.add('modal-view');
            engTxt.innerHTML = "Tongue";
            yorTxt.innerHTML = "ahọn";
        });
    }
}



// Close button function
closeBtn.addEventListener("click",function(){
    modalBg.classList.remove("modal-view");
});