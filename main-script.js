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

//lang = document.getElementsByTagName("html")[0].getAttribute("lang");
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
mainContainer.style.border = '1px solid blue';
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
console.log('first run =>>> ')
console.log('lang =>>> ' +lang)
console.log('shift =>>> ' +shiftPressed)
console.log('caps =>>> ' +capsPressed)

butExist = MakeKbd(lang, shiftPressed, capsPressed);




let shiftCounter = 0;

/*document.onkeydown =(e) =>{
    console.log('key code = > '+ e.code);
    //lang = langTest(e.key, lang);
    if(e.shiftKey){
        console.log('shift pressed')
        shiftPressed = true;
    butExist = MakeKbd(lang,shiftPressed, capsPressed);
    };
    

}*/

document.onkeyup =(e) => { // =========== then key pull)up =============
    

    lang = langTest(e.key, lang);
    for(let i = 0; i<butExist.length; i++ ){
        //console.log( butExist[i].classList[1]);
        //console.log('e.key ==> '+e.key);
        if(butExist[i].classList[1] == e.key.toLowerCase()){//TODO if control key dont work
            console.log('its true ---------------------------------')
          butExist[i].style.cssText +='background-color: rgb(102, 102, 188);'  
        }
        if(keyboard[i].type === 'control' && butExist[i].classList[1] == e.key){
            butExist[i].style.cssText +='background-color: rgb(102, 102, 188);'
        }
    }


}



document.onkeydown = (e) => {
    lang = langTest(e.key, lang);
    /*if(e.shiftKey){ shiftPressed = false;
        shiftCounter++;

        console.log('shift keydown => ' + shiftPressed +' => '+shiftCounter);
        MakeKbd(lang,shiftPressed);
    } else { shiftPressed = true;
        MakeKbd(lang,shiftPressed);

    }*/


    // capsLock here
    if(e.key === 'CapsLock' && !capsPressed ){capsPressed = true;
        butExist = MakeKbd(lang,capsPressed); // TODO in module

    }else{capsPressed = false;
       butExist = MakeKbd(lang,capsPressed); 

    }
    //============== capsLock end ==========================
    
    // ============================ then key pressed change background
    for(let i = 0; i<butExist.length; i++ ){
        //console.log( butExist[i].classList[1]);
        //console.log('e.key ==> '+e.key);
        if(butExist[i].classList[1] == e.key.toLowerCase()){//TODO
            console.log('its true ---------------------------------')
          butExist[i].style.cssText +='background-color: rgb(17, 17, 137);'  
        }
        if(keyboard[i].type === 'control' && butExist[i].classList[1] == e.key){
            butExist[i].style.cssText +='background-color: rgb(17, 17, 137);'
        }


    }
// ============================ then key pressed change background
    
    
    let caps = e.getModifierState && e.getModifierState('CapsLock');
    console.log ('caps =========================================> ' + caps);

    if(e.shiftKey && e.altKey){
        //lang = langTest(e.key, lang);
    console.log('We here ==========================');
    console.log('capsPressed =>' + capsPressed);
        if(lang === 'ru'){lang = 'en'
        butExist = MakeKbd(lang, shiftPressed, caps);   
        } else {lang = 'ru';
        butExist = MakeKbd(lang, shiftPressed, caps)};
        console.log('lang ==>' + lang);
        localStorage.setItem('lang', lang);
     };
    localStorage.setItem('text', textBlock.value);
        console.log(e.key + ' => '+e.key);
}

textBlock.addEventListener('keypress',(e)=>{ //keydown
    console.log('location =>' + e.location);
    currentText = textBlock.value;
    document.documentElement.setAttribute('text', currentText);
    textBlock.innerText = currentText;
    localStorage.setItem('text', textBlock.value);// set local storage
    console.log(currentText);
    

})

let language = window.navigator.language;
window.onload = () => {
    console.log('ct =>' + currentText);
    
    textBlock.value = localStorage.getItem('text');// get from local storage
    lang = localStorage.getItem('lang');

    console.log('get from LS after onload =>'+lang);

    //shiftPressed = localStorage.getItem('shift');
    //capsPressed = localStorage.getItem('caps');
    console.log(lang);
    //butExist = MakeKbd(lang);

    
}
