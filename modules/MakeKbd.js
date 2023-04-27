import keyboard from "./keyboard.js";
import Button from "./Button.js";

const MakeKbd = (lang, shiftPressed, capsPressed) => {


let keyboardBlock = document.getElementById('keyboardBlock');
keyboardBlock.innerHTML = '';
//=================================================Make Kbd=================================================
//keyboardBlock.removeChild('button');
for(let i=0; i<keyboard.length; i++) {
        if(shiftPressed || capsPressed) {
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
        console.log('button id =>'+button[i].id);
        console.log('lang => '+ lang);

        if(shiftPressed || capsPressed){
            if (lang === 'en'){
                textBlock.value += keyboard[button[i].id-1].shiftEn}
                else {textBlock.value += keyboard[button[i].id-1].shiftRu};  

        } else {

        if (lang === 'en'){
        textBlock.value += keyboard[button[i].id-1].en}
        else {textBlock.value += keyboard[button[i].id-1].ru};
        }
    })
    

}

return button;

}

export default MakeKbd;