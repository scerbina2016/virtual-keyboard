
const Button = (className, id, topInner, centralInner) => {

    const ButtonHtml = `
                        <div class="${className}" id="${id}" >
                            <div class="topInner">${topInner}</div>
                            <div class="centralInner">${centralInner}</div>
                        </div>
                        `

return ButtonHtml;

}
 
export default Button;