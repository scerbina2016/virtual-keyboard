const langTest = (char, lang) => {

    let ans = 'nothing';

    if(/[а-я]/i.test(char)) {ans ='ru'};
    if(/[a-z]/i.test(char)) {ans ='en'};
    if(ans === 'nothing') {ans = lang};
    

    return ans
}

export default langTest;