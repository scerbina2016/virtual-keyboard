console.log("I'm here js");

let mainContainer = document.createElement('div');
mainContainer.className ='main-container';
mainContainer.id = 'container';
mainContainer.style.width ='20vw';
mainContainer.style.height = '20vw';
document.body.append(mainContainer);

mainContainer.addEventListener('click', ()=>{
    alert('BUBUM !!!');
})