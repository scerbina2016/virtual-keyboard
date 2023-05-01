import TextArea from "./modules/TextArea.js";
import keyboard from "./modules/keyboard.js";
import Button from "./modules/Button.js";
import KeyboardArea from "./modules/KeyboardArea.js";
import MakeKbd from "./modules/MakeKbd.js";
import langTest from "./modules/langTest.js";




let butExist;



let lang = document.getElementsByTagName("html")[0].getAttribute("lang");// get language from html
console.log('first rum lang => '+lang);

//document.documentElement.setAttribute('lang','ru');// set language to html

lang = document.getElementsByTagName("html")[0].getAttribute("lang");
localStorage.setItem('lang', lang);



let currentText = '';
//document.documentElement.setAttribute('text', currentText); any attribute make like this
let shiftPressed = false;
let controlPressed = false;
let altPressed = false;
let capsPressed = false;

let mainContainer = document.createElement('div');
mainContainer.className ='main-container';
mainContainer.id = 'container';
mainContainer.style.width ='90vw';
mainContainer.style.height = 'fit-content';
//mainContainer.style.border = '1px solid blue';
mainContainer.style.margin = 'auto';
mainContainer.style.marginTop = '1vw';
mainContainer.style.display = 'flex';
mainContainer.style.flexDirection = 'column';
mainContainer.style.flexWrap = 'wrap';
mainContainer.style.justifyContent = 'flex-start';
document.body.append(mainContainer);



mainContainer.insertAdjacentHTML("afterbegin",TextArea('textBlock','textArea'));
let textBlock = document.getElementById('textBlock');
mainContainer.insertAdjacentHTML("beforeend", 
    ` <div class='keyboardArea' id = 'keyboardBlock'></div>`
);

mainContainer.insertAdjacentHTML("afterbegin",
    `<p class="prompt">switching language "Shift"+"Alt" or button "Lang" (only virtual keyboard)`

);
console.log('first run =>>> ')
console.log('lang =>>> ' +lang)
console.log('first lang =>'+localStorage.getItem('lang'));
console.log('shift =>>> ' +shiftPressed)
console.log('caps =>>> ' +capsPressed)

//lang = prompt('Для синхронизации языка нажмите любую БУКВУ');
butExist = MakeKbd(localStorage.getItem('lang'), shiftPressed, capsPressed);

// lang but works ones. Why?===========
/*let langBut = document.getElementById('65');
console.log(langBut);
langBut.addEventListener('click',()=>{
 if(lang == 'en'){
    lang = 'ru';
    butExist = MakeKbd(lang,shiftPressed, capsPressed);
    langBut = document.getElementById('65');
  } else {
    lang = 'ru';
    butExist = MakeKbd(lang,shiftPressed, capsPressed);   
    langBut = document.getElementById('65');
  } 
})*/


let shiftCounter = 0;

document.onkeydown =(e) =>{
    //lang = langTest(e.key, lang);
    butExist = MakeKbd(lang,shiftPressed, capsPressed);
    console.log('key code = > '+ e.code);
    //lang = langTest(e.key, lang);
    if(e.shiftKey && e.altKey){
        console.log('shift pressed  ' + e.shiftKey +' '+e.altKey);
        if(lang =='ru'){lang ='en'} else {lang='ru'};
    butExist = MakeKbd(lang,shiftPressed, capsPressed);
    localStorage.setItem('lang',lang);
    console.log( 'from LS ==>> '+ localStorage.getItem('lang'));
    };
    for(let i = 0; i<butExist.length; i++ ){
        //console.log( butExist[i].classList[1]);і
        //console.log('e.key ==> '+e.key);
        if(butExist[i].classList[1] == e.key.toLowerCase()){//TODO
            console.log('its true ---------------------------------')
          butExist[i].style.cssText +='background-color: rgb(17, 17, 137);'  
         setTimeout(()=> butExist[i].style.cssText +='background-color: rgb(102, 102, 188);', 100);  

        } else
        if(keyboard[i].type === 'control' && butExist[i].classList[1] == e.code){
            console.log('classList  '+butExist[i].classList[1]);

            butExist[i].style.cssText +='background-color: rgb(17, 17, 137);'
            setTimeout(()=> butExist[i].style.cssText +='background-color: rgb(102, 102, 188);', 100);
        }


    }

    // capsLock here
    if(e.key === 'CapsLock'){capsPressed = !capsPressed;
        butExist = MakeKbd(lang,capsPressed); // TODO in module

    }
    //============== capsLock end ==========================
}

