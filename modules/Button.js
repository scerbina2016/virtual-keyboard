
const Button = (className, id, topInner, centralInner,lang) => {
    let cssClass='';
    if(centralInner ==='Shift'){cssClass = 'Shift'+id;}
    if(centralInner ==='Control'){cssClass = 'Control'+id;}
    if(centralInner ==='Alt'){cssClass = 'Alt'+id;}
    if(id === 65){cssClass = 'Lang'+id;topInner = 'Lang'; centralInner = lang};
    if(id === 59){cssClass = 'space';topInner = ' '; centralInner = ' '};



    const ButtonHtml = `
                     <div class="${className} ${centralInner} ${cssClass}" id="${id}" >
                          <div class="topInner">${topInner}</div>
                          <div class="centralInner">${centralInner}</div>
                    </div>
                    `

return ButtonHtml;

}
 
export default Button;