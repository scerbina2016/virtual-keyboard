import keyboard from "./keyboard.js";
import Button from "./Button.js";
import langTest from "./langTest.js";

const MakeKbd = (lang, shiftPressed, capsPressed) => {
let shiftCounter =0;
console.log('caps pressed =>'+capsPressed);
let keyboardBlock = document.getElementById('keyboardBlock');
keyboardBlock.innerHTML = '';
//localStorage.setItem('shift', shiftPressed);
//localStorage.setItem('caps', capsPressed);
//localStorage.setItem('lang', lang);


//=================================================Make Kbd=================================================
//keyboardBlock.removeChild('button');
for(let i=0; i<keyboard.length; i++) {
    if(shiftPressed || capsPressed) {//   || capsPressed

        if(lang === 'en'){
            keyboardBlock.insertAdjacentHTML("beforeend",Button('button',keyboard[i].id,keyboard[i].en,keyboard[i].shiftEn,lang.toUpperCase()));
        } else {
            keyboardBlock.insertAdjacentHTML("beforeend",Button('button',keyboard[i].id,keyboard[i].ru,keyboard[i].shiftRu, lang.toUpperCase()));
        }

    } else {

    if(lang === 'en'){
        keyboardBlock.insertAdjacentHTML("beforeend",Button('button',keyboard[i].id,keyboard[i].shiftEn,keyboard[i].en, lang.toUpperCase()));
    } else {
        keyboardBlock.insertAdjacentHTML("beforeend",Button('button',keyboard[i].id,keyboard[i].shiftRu,keyboard[i].ru,lang.toUpperCase()));
    }
}

}

//shiftPressed

let button = document.querySelectorAll('.button');

console.log(' numbers butt =>'+button.length);
for(let i=0; i<button.length; i++){
    button[i].style.cssText += `grid-row: ${keyboard[i].row}/${keyboard[i].row+1}`;
    button[i].addEventListener('click',()=>{
       
        if(shiftPressed || capsPressed){
            if (lang === 'en'){
                


                if(keyboard[button[i].id-1].type != 'control'){
               textBlock.value += keyboard[button[i].id-1].shiftEn};
            
                button = MakeKbd(lang,false, capsPressed)
                if(capsPressed){document.querySelector('.CapsLock').style.cssText +='background-color: rgb(17, 17, 137);'}    
            
            }else {
                
                if(keyboard[button[i].id-1].type != 'control'){   
                textBlock.value += keyboard[button[i].id-1].shiftRu};

                 button = MakeKbd(lang,false, capsPressed)
                 if(capsPressed){document.querySelector('.CapsLock').style.cssText +='background-color: rgb(17, 17, 137);'}  
            };  

            
        } else {

        if (lang === 'en'){
            

            if(keyboard[button[i].id-1].type != 'control'){   
            textBlock.value += keyboard[button[i].id-1].en};
        
        }
            
        else {
            
            if(keyboard[button[i].id-1].type != 'control'){ 
            textBlock.value += keyboard[button[i].id-1].ru}
        };

        }

        if(keyboard[button[i].id-1].en === 'Enter'){
            textBlock.value += '\r\n';
        }


    })
    
}
let langBut = document.getElementById('65');// TODO for Shift and Control
console.log(langBut);
langBut.addEventListener('click', ()=>{
    
    if(lang == 'en'){

        lang = 'ru';
        button = MakeKbd(lang,shiftPressed, capsPressed);
        if(capsPressed){document.querySelector('.CapsLock').style.cssText +='background-color: rgb(17, 17, 137);'}
      } else {
        lang = 'en';
        button = MakeKbd(lang,shiftPressed, capsPressed);   
        if(capsPressed){document.querySelector('.CapsLock').style.cssText +='background-color: rgb(17, 17, 137);'}
      } 
})
// ========================== for shift  =========================
let shiftLeft =document.querySelector('.ShiftLeft');
console.log(shiftLeft);
shiftLeft.addEventListener('click', (e) =>{
  button = MakeKbd(lang,true, capsPressed);  
  document.querySelector('.ShiftLeft').style.cssText +='background-color: rgb(17, 17, 137)'; 
    
})

let shiftRight =document.querySelector('.ShiftRight');
console.log(shiftRight);
shiftRight.addEventListener('click', (e) =>{
    button = MakeKbd(lang,true, capsPressed)
    document.querySelector('.ShiftRight').style.cssText +='background-color: rgb(17, 17, 137)';
})
// =========================== for caps ===========================
let caps = document.querySelector('.CapsLock');
console.log(caps);
caps.addEventListener('click',(e)=>{
    capsPressed =!capsPressed;
    console.log(caps.style.cssText);
    
    button = MakeKbd(lang,shiftPressed, capsPressed);
    caps = document.querySelector('.CapsLock');
    if(capsPressed){
        caps.style.cssText +='background-color: rgb(17, 17, 137);';
    } else {
        caps.style.cssText +='background-color: rgb(102, 102, 188);'; 
    }
})
// ======================= for space ==============================
let space = document.querySelector('.Space');
space.addEventListener('click',()=>{
    textBlock.value +=' ';
})


return button;

}

export default MakeKbd;