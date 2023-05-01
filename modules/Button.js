
const Button = (className, id, topInner, centralInner,lang) => {
    let cssClass='';
    let classTwo = centralInner;
    if(centralInner ==='Shift' && id === 43){classTwo = 'ShiftLeft';}
    if(centralInner ==='Shift' && id === 55){classTwo = 'ShiftRight';}

    if(centralInner ==='Control' && id === 56){classTwo = 'ControlLeft';}
    if(centralInner ==='Control' && id === 61){classTwo = 'ControlRight';}

    if(centralInner ==='Alt' && id === 58){classTwo = 'AltLeft';}
    if(centralInner ==='Alt' && id === 60){classTwo = 'AltRight';}
    if(id === 65){cssClass = 'Lang'+id;topInner = 'Lang'; centralInner = lang};
    if(id === 59){classTwo = 'Space';topInner = ' '; centralInner = ' '};



    const ButtonHtml = `
                     <div class="${className} ${classTwo} ${cssClass}" id="${id}" >
                          <div class="topInner">${topInner}</div>
                          <div class="centralInner">${centralInner}</div>
                    </div>
                    `

return ButtonHtml;

}
 
export default Button;