var parts = document.querySelectorAll("a");
//console.log(parts);
var modalBg = document.getElementById("modal-bg");
var closeBtn = document.getElementById("modal-close");
var engTxt = document.getElementById('eng-text');
var yorTxt = document.getElementById("yor-text");
var frTxt = document.getElementById("fr-text");
var gerTxt = documnent.getElementById("ger-text");

for(let i = 0;i<parts.length;i++){
    var part = parts[i];
    //console.log(part);
    
    if(part.getAttribute('id') == 'hair'){
        part.addEventListener("click",() =>{
            modalBg.classList.add('modal-view');
            engTxt.innerHTML = "Hair";
            yorTxt.innerHTML = "Irun";
            frTxt.innerHTML = "Cheveu";
            gerTxt.innerHTML = "das Haar"
        });
    }
    else if(part.getAttribute('id') == 'nose'){
        part.addEventListener("click",() =>{
            modalBg.classList.add('modal-view');
            engTxt.innerHTML = "Nose";
            yorTxt.innerHTML = "imu";
            frTxt.innerHTML = "Nez";
            gerTxt.innerHTML = "die Nase"
        });
    }
    else if(part.getAttribute('id') == 'eyebrows'){
        part.addEventListener("click",() =>{
            modalBg.classList.add('modal-view');
            engTxt.innerHTML = "Eyebrow";
            yorTxt.innerHTML = "irun oju";
            frTxt.innerHTML = "sourcil";
            gerTxt.innerHTML = "die Augenbraue"
            
        });
    }
    else if(part.getAttribute('id') == 'eyes'){
        part.addEventListener("click",() =>{
            modalBg.classList.add('modal-view');
            engTxt.innerHTML = "Eyes";
            yorTxt.innerHTML = "oju";
            frTxt.innerHTML = "les yeux";
            gerTxt.innerHTML = "die Augen"
        });
    }
    else if(part.getAttribute('id') == 'teeth'){
        part.addEventListener("click",() =>{
            modalBg.classList.add('modal-view');
            engTxt.innerHTML = "Teeth";
            yorTxt.innerHTML = "Eyin";
            frTxt.innerHTML = "dents";
            gerTxt.innerHTML = "die Zähne"
        });
    }
    else if(part.getAttribute('id') == 'ears'){
        part.addEventListener("click",() =>{
            modalBg.classList.add('modal-view');
            engTxt.innerHTML = "Ears";
            yorTxt.innerHTML = "etí";
            frTxt.innerHTML = "Oreilles";
            gerTxt.innerHTML = "das Ohr"
        });
    }
    else if(part.getAttribute('id') == 'tongue'){
        part.addEventListener("click",() =>{
            modalBg.classList.add('modal-view');
            engTxt.innerHTML = "Tongue";
            yorTxt.innerHTML = "ahọn";
            frTxt.innerHTML = "Langue";
            gerTxt.innerHTML = "die Zunge";
        });
    }
}



// Close button function
closeBtn.addEventListener("click",function(){
    modalBg.classList.remove("modal-view");
});