

// function play() {
//     console.log(`I am clicked`);

//     //step 1:  hide home screen
//     const homeSection = document.getElementById('home');
    
//     homeSection.classList.add('hidden')


//     const playSection = document.getElementById('playground');
    
//     playSection.classList.remove('hidden')

// }


function handleKeyboarButtonPress(){
    console.log('I got a click.');
}


document.addEventListener('keyup', handleKeyboarButtonPress);



function continueGame() {
    const alphabet = randomLetter();
    // return alphabet;
    // console.log(alphabet);
    const displayLetter = document.getElementById('currentAlphabet');
    displayLetter.innerText = alphabet;
}



function play() {
    hideElementById('home');
    showElementById('playground');
    continueGame();
}

// console.log(play());