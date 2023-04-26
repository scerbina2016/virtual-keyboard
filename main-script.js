import TextArea from "./modules/TextArea.js";
import keyboard from "./modules/keyboard.js";
import Button from "./modules/Button.js";
<<<<<<< HEAD
import KeyboardArea from "./modules/KeyboardArea.js";
import MakeKbd from "./modules/MakeKbd.js";
=======
//import KeyboardArea from "./modules/KeyboardArea.js";
>>>>>>> 9c4888cea16cee9bfcab24c04b2f9739192ab235

let lang = document.getElementsByTagName("html")[0].getAttribute("lang");// get language from html
console.log(lang);
document.documentElement.setAttribute('lang','ru');// set language to html

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
mainContainer.style.height = '70vh';
mainContainer.style.border = '1px solid blue';
mainContainer.style.margin = 'auto';
mainContainer.style.marginTop = '10vh';
mainContainer.style.display = 'flex';
mainContainer.style.flexDirection = 'row';
mainContainer.style.flexWrap = 'wrap';
mainContainer.style.justifyContent = 'flex-start';
document.body.append(mainContainer);

mainContainer.insertAdjacentHTML("afterbegin",TextArea('textBlock','textArea'));
let textBlock = document.getElementById('textBlock');
mainContainer.insertAdjacentHTML("beforeend", 
    ` <div class='keyboardArea' id = 'keyboardBlock'></div>`
);

MakeKbd(lang, shiftPressed, capsPressed);

/*let keyboardBlock = document.getElementById('keyboardBlock');
//=================================================Make Kbd=================================================
for(let i=0; i<keyboard.length; i++) {
keyboardBlock.insertAdjacentHTML("beforeend",Button('button',keyboard[i].id,keyboard[i].shiftEn,keyboard[i].en));
}
let button = document.querySelectorAll('.button');
console.log(' numbers butt =>'+button.length);
for(let i=0; i<button.length; i++){
    button[i].style.cssText += `grid-row: ${keyboard[i].row}/${keyboard[i].row+1}`;
    button[i].addEventListener('click',()=>{
        console.log('button id =>'+button[i].id);
        textBlock.value += keyboard[button[i].id-1].en;
    })
}

//=====================================================================================================
*/


let shiftCounter = 0;

document.onkeydown =(e) =>{

    if(e.shiftKey && !capsPressed){ shiftPressed = !shiftPressed};
    MakeKbd(lang,false);

}


document.onkeydown = (e) => {
    /*if(e.shiftKey){ shiftPressed = false;
        shiftCounter++;

        console.log('shift keydown => ' + shiftPressed +' => '+shiftCounter);
        MakeKbd(lang,shiftPressed);
    } else { shiftPressed = true;
        MakeKbd(lang,shiftPressed);

    }*/


    // capsLock here
    if(e.key === 'CapsLock' && !capsPressed ){capsPressed = true;
        MakeKbd(lang,capsPressed); // TODO in module
    }else{capsPressed = false;
        MakeKbd(lang,capsPressed); 
    }
    //============== capsLock end ==========================
    if(e.shiftKey && e.key ==='Alt'){
    
    console.log('capsPressed =>' + capsPressed);
        if(lang === 'ru'){lang = 'en'
          MakeKbd(lang, shiftPressed, capsPressed);   
        } else {lang = 'ru';
          MakeKbd(lang, shiftPressed, capsPressed)};
        console.log('lang ==>' + lang);
        localStorage.setItem('lang', lang);
     };
    localStorage.setItem('text', textBlock.value);
        console.log(e.key + ' => '+e.key);
}

textBlock.addEventListener('keydown',(e)=>{
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
    localStorage.getItem('lang');
    console.log(lang);
    console.log('lang =>'+window.navigator.language);
    console.log(document.getElementsByTagName("html")[0].getAttribute("lang"));

    
}
