const langTest = (char, lang) => {
    console.log(`from langTest in => char => ${char}  lang => ${lang}`);
    let ans = 'nothing';

    if(/[а-я]/i.test(char)) {ans ='ru'};
    if(/[a-z]/i.test(char)) {ans ='en'};
    if(ans === 'nothing') {ans = lang};
    
    //localStorage.setItem('lang', ans);
    console.log(`from langTest in => char => ${char}  lang => ${ans}`);
    return ans
}

export default langTest;