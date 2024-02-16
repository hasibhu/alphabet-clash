
// Hide landing page
function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

// display typing page
function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}



function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}


// Element value finding function

function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;

}

// elemen value setting function

function setTextElementValueById(elementId, value ) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

// alphabet finding function
function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
}





// function getARandomAlphabet() {
//     // get or create an alphabet array
//     const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
//     const alphabets = alphabetString.split('');
//     // console.log(alphabets);

//     // get a random index between 0 -25
//     const randomNumber = Math.random() * 25;
//     const index = Math.round(randomNumber);
    
//     const alphabet = alphabets[index];
//     // console.log(index, alphabet);
//     return alphabet;
// }