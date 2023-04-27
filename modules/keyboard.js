const keyboard = [
    {
        id: 1,
        row: 1,
        place: 1,
        en:'`',
        shiftEn:'~',
        ru:'Ё',
        shiftRu:'~',
        type:'leter'
    },
    {
        id: 2,
        row: 1,
        place: 2,
        en:'1',
        shiftEn:'!',
        ru:'1',
        shiftRu:'!',
        type:'number',
    },
    {
        id: 3,
        row: 1,
        place: 3,
        en:'2',
        shiftEn:'@',
        ru:'2',
        shiftRu:'"',
        type:'number',
    },
    {
        id: 4,
        row: 1,
        place: 4,
        en:'3',
        shiftEn:'#',
        ru:'3',
        shiftRu:'№',
        type:'number',
    },
    {
        id: 5,
        row: 1,
        place: 5,
        en:'4',
        shiftEn:'$',
        ru:'4',
        shiftRu:';',
        type:'number',
    },
    {
        id: 6,
        row: 1,
        place: 6,
        en:'5',
        shiftEn:'%',
        ru:'5',
        shiftRu:'%',
        type:'number',
    },
    {
        id: 7,
        row: 1,
        place: 7,
        en:'6',
        shiftEn:'^',
        ru:'6',
        shiftRu:':',
        type:'number',
    },
    {
        id: 8,
        row: 1,
        place: 8,
        en:'7',
        shiftEn:'&',
        ru:'7',
        shiftRu:'?',
        type:'number',
    },
    {
        id: 9,
        row: 1,
        place: 9,
        en:'8',
        shiftEn:'*',
        ru:'8',
        shiftRu:'*',
        type:'number',
    },
    {
        id: 10,
        row: 1,
        place: 10,
        en:'9',
        shiftEn:'(',
        ru:'9',
        shiftRu:'(',
        type:'number',
    },
    {
        id: 11,
        row: 1,
        place: 11,
        en:'0',
        shiftEn:')',
        ru:'0',
        shiftRu:')',
        type:'number',
    },
    {
        id: 12,
        row: 1,
        place: 12,
        en:'-',
        shiftEn:'_',
        ru:'-',
        shiftRu:'_',
        type:'number',
    },
    {
        id: 13,
        row: 1,
        place: 13,
        en:'=',
        shiftEn:'+',
        ru:'=',
        shiftRu:'+',
        type:'number',
    },
    {
        id: 14,
        row: 1,
        place: 14,
        en:'Backspace',
        shiftEn:'Backspace',
        ru:'Backspace',
        shiftRu:'Backspace',
        type:'control',
    },
    {
        id: 15,
        row: 2,
        place: 1,
        en:'Tab',
        shiftEn:'Tab',
        ru:'Tab',
        shiftRu:'Tab',
        type:'control',
    },
    {
        id: 16,
        row: 2,
        place: 2,
        en:'q',
        shiftEn:'Q',
        ru:'й',
        shiftRu:'Й',
        type:'leter',
    },
    {
        id: 17,
        row: 2,
        place: 3,
        en:'w',
        shiftEn:'W',
        ru:'ц',
        shiftRu:'Ц',
        type:'leter',
    },
    {
        id: 18,
        row: 2,
        place: 4,
        en:'e',
        shiftEn:'E',
        ru:'у',
        shiftRu:'У',
        type:'leter',
    },
    {
        id: 19,
        row: 2,
        place: 5,
        en:'r',
        shiftEn:'R',
        ru:'к',
        shiftRu:'К',
        type:'leter',
    },
    {
        id: 20,
        row: 2,
        place: 6,
        en:'t',
        shiftEn:'T',
        ru:'е',
        shiftRu:'Е',
        type:'leter',
    },
    {
        id: 21,
        row: 2,
        place: 7,
        en:'y',
        shiftEn:'Y',
        ru:'н',
        shiftRu:'Н',
        type:'leter',
    },
    {
        id: 22,
        row: 2,
        place: 8,
        en:'u',
        shiftEn:'U',
        ru:'г',
        shiftRu:'Г',
        type:'leter',
    },
    {
        id: 23,
        row: 2,
        place: 9,
        en:'i',
        shiftEn:'I',
        ru:'ш',
        shiftRu:'Ш',
        type:'leter',
    },
    {
        id: 24,
        row: 2,
        place: 10,
        en:'o',
        shiftEn:'O',
        ru:'щ',
        shiftRu:'Щ',
        type:'leter',
    },
    {
        id: 25,
        row: 2,
        place: 11,
        en:'p',
        shiftEn:'P',
        ru:'з',
        shiftRu:'З',
        type:'leter',
    },
    {
        id: 26,
        row: 2,
        place: 12,
        en:'[',
        shiftEn:'{',
        ru:'х',
        shiftRu:'Х',
        type:'leter',
    },
    {
        id: 27,
        row: 2,
        place: 13,
        en:']',
        shiftEn:'}',
        ru:'ъ',
        shiftRu:'Ъ',
        type:'leter',
    },
    {
        id: 28,
        row: 2,
        place: 14,
        en:'\\',
        shiftEn:'|',
        ru:'\\',
        shiftRu:'/',
        type:'leter',
    },
    {
        id: 29,
        row: 2,
        place: 15,
        en:'Delete',
        shiftEn:'Delete',
        ru:'Delete',
        shiftRu:'Delete',
        type:'control',
    },
    {
        id: 30,
        row: 3,
        place: 1,
        en:'Caps Lock',
        shiftEn:'Caps Lock',
        ru:'Caps Lock',
        shiftRu:'Caps Lock',
        type:'control',
    },
    {
        id: 31,
        row: 3,
        place: 2,
        en:'a',
        shiftEn:'A',
        ru:'ф',
        shiftRu:'Ф',
        type:'leter',
    },
    {
        id: 32,
        row: 3,
        place: 3,
        en:'s',
        shiftEn:'S',
        ru:'ы',
        shiftRu:'Ы',
        type:'leter',
    },
    {
        id: 33,
        row: 3,
        place: 4,
        en:'d',
        shiftEn:'D',
        ru:'в',
        shiftRu:'В',
        type:'leter',
    },
    {
        id: 34,
        row: 3,
        place: 5,
        en:'f',
        shiftEn:'F',
        ru:'а',
        shiftRu:'А',
        type:'leter',
    },
    {
        id: 35,
        row: 3,
        place: 6,
        en:'g',
        shiftEn:'G',
        ru:'п',
        shiftRu:'П',
        type:'leter',
    },
    {
        id: 36,
        row: 3,
        place: 7,
        en:'h',
        shiftEn:'H',
        ru:'р',
        shiftRu:'Р',
        type:'leter',
    },
    {
        id: 37,
        row: 3,
        place: 8,
        en:'j',
        shiftEn:'J',
        ru:'о',
        shiftRu:'О',
        type:'leter',
    },
    {
        id: 38,
        row: 3,
        place: 9,
        en:'k',
        shiftEn:'K',
        ru:'л',
        shiftRu:'Л',
        type:'leter',
    },
    {
        id: 39,
        row: 3,
        place: 10,
        en:'l',
        shiftEn:'L',
        ru:'д',
        shiftRu:'Д',
        type:'leter',
    },
    {
        id: 40,
        row: 3,
        place: 11,
        en:';',
        shiftEn:':',
        ru:'ж',
        shiftRu:'Ж',
        type:'leter',
    },
    {
        id: 41,
        row: 3,
        place: 12,
        en:"'",
        shiftEn:'"',
        ru:'э',
        shiftRu:'Э',
        type:'leter',
    },
    {
        id: 42,
        row: 3,
        place: 13,
        en:'Enter',
        shiftEn:'Enter',
        ru:'Enter',
        shiftRu:'Enter',
        type:'control',
    },
    {
        id: 43,
        row: 4,
        place: 1,
        en:'Shift',
        shiftEn:'Shift',
        ru:'Shift',
        shiftRu:'Shift',
        type:'control',
    },
    {
        id: 44,
        row: 4,
        place: 2,
        en:'z',
        shiftEn:'Z',
        ru:'я',
        shiftRu:'Я',
        type:'leter',
    },
    {
        id: 45,
        row: 4,
        place: 3,
        en:'x',
        shiftEn:'X',
        ru:'ч',
        shiftRu:'Ч',
        type:'leter',
    },
    {
        id: 46,
        row: 4,
        place: 4,
        en:'c',
        shiftEn:'C',
        ru:'с',
        shiftRu:'С',
        type:'leter',
    },
    {
        id: 47,
        row: 4,
        place: 5,
        en:'v',
        shiftEn:'V',
        ru:'м',
        shiftRu:'М',
        type:'leter',
    },
    {
        id: 48,
        row: 4,
        place: 6,
        en:'b',
        shiftEn:'B',
        ru:'и',
        shiftRu:'И',
        type:'leter',
    },
    {
        id: 49,
        row: 4,
        place: 7,
        en:'n',
        shiftEn:'N',
        ru:'т',
        shiftRu:'Т',
        type:'leter',
    },
    {
        id: 50,
        row: 4,
        place: 8,
        en:'m',
        shiftEn:'M',
        ru:'ь',
        shiftRu:'Ь',
        type:'leter',
    },
    {
        id: 51,
        row: 4,
        place: 9,
        en:',',
        shiftEn:'<',
        ru:'б',
        shiftRu:'Б',
        type:'leter',
    },
    {
        id: 52,
        row: 4,
        place: 10,
        en:'.',
        shiftEn:'>',
        ru:'ю',
        shiftRu:'Ю',
        type:'leter',
    },
    {
        id: 53,
        row: 4,
        place: 11,
        en:'/',
        shiftEn:'?',
        ru:'.',
        shiftRu:',',
        type:'leter',
    },
    {
        id: 54,
        row: 4,
        place: 12,
        en:'ArrowUp',
        shiftEn:'ArrowUp',
        ru:'ArrowUp',
        shiftRu:'ArrowUp',
        type:'control',
    },
    {
        id: 55,
        row: 4,
        place: 13,
        en:'Shift',
        shiftEn:'Shift',
        ru:'Shift',
        shiftRu:'Shift',
        type:'control',
    },
    {
        id: 56,
        row: 5,
        place: 1,
        en:'Ctrl',
        shiftEn:'Ctrl',
        ru:'Ctrl',
        shiftRu:'Ctrl',
        type:'control',
    },
    {
        id: 57,
        row: 5,
        place: 2,
        en:'Win',
        shiftEn:'Win',
        ru:'Win',
        shiftRu:'Win',
        type:'control',
    },
    {
        id: 58,
        row: 5,
        place: 3,
        en:'Alt',
        shiftEn:'Alt',
        ru:'Alt',
        shiftRu:'Alt',
        type:'control',
    },
    {
        id: 59,
        row: 5,
        place: 4,
        en:'White space',
        shiftEn:'White space',
        ru:'White space',
        shiftRu:'White space',
        type:'leter',
    },
    {
        id: 60,
        row: 5,
        place: 5,
        en:'Alt',
        shiftEn:'Alt',
        ru:'Alt',
        shiftRu:'Alt',
        type:'control',
    },
    {
        id: 61,
        row: 5,
        place: 6,
        en:'Ctrl',
        shiftEn:'Ctrl',
        ru:'Ctrl',
        shiftRu:'Ctrl',
        type:'control',
    },
    {
        id: 62,
        row: 5,
        place: 7,
        en:'ArrowLeft',
        shiftEn:'ArrowLeft',
        ru:'ArrowLeft',
        shiftRu:'ArrowLeft',
        type:'control',
    },
    {
        id: 63,
        row: 5,
        place: 8,
        en:'ArrowDown',
        shiftEn:'ArrowDown',
        ru:'ArrowDown',
        shiftRu:'ArrowDown',
        type:'control',
    },
    {
        id: 64,
        row: 5,
        place: 9,
        en:'ArrowRight',
        shiftEn:'ArrowRight',
        ru:'ArrowRight',
        shiftRu:'ArrowRight',
        type:'control',
    },
    

]

export default keyboard;