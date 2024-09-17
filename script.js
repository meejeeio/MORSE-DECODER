const morseCodeMapping = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 
    'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 
    'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 
    'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 
    'Y': '-.--', 'Z': '--..',
    '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', 
    '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
    ' ': '/'
};

function morseToEnglish(morseCode) {
    let english = '';
    let words = morseCode.split(' / ');
    for (let word of words) {
        let letters = word.split(' ');
        for (let letter of letters) {
            for (let key in morseCodeMapping) {
                if (morseCodeMapping[key] === letter) {
                    english += key;
                }
            }
        }
        english += ' ';
    }
    return english.trim();
}

function englishToMorse(english) {
    let morseCode = '';
    let words = english.toUpperCase().split(' ');
    for (let word of words) {
        for (let letter of word) {
            if (morseCodeMapping[letter]) {
                morseCode += morseCodeMapping[letter] + ' ';
            }
        }
        morseCode += '/ ';
    }
    return morseCode.trim();
}

document.addEventListener('DOMContentLoaded', function() {
    const decodeForm = document.getElementById('decode-form');
    const encodeForm = document.getElementById('encode-form');

    decodeForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const morseCode = document.getElementById('morse_code').value;
        const english = morseToEnglish(morseCode);
        document.getElementById('english-output').innerHTML = english;
    });

    encodeForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const english = document.getElementById('english').value;
        const morseCode = englishToMorse(english);
        document.getElementById('morse_code-output').innerHTML = morseCode;
    });
});