
const Button = (className, id, topInner, centralInner) => {

    const ButtonHtml = `
                        <div class="${className}" id="${id}" >
                            <div>${topInner}</div>
                            <div>${centralInner}</div>
                        </div>
                        `

return ButtonHtml;

}
 
export default Button;