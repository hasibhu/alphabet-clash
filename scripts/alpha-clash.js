// function play(){
//     // step-1: hide the home screen. to hide the screen add the class hidden to the home section
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList)

//     // show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
//     // console.log(playgroundSection.classList)
// }

function handleKeyboardKeyUpEvent(event) {
    // player pressed
    const playerPressed = event.key;
    console.log('Player pressed', playerPressed);

    // expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
    console.log(playerPressed, expectedAlphabet)

    if (playerPressed === expectedAlphabet) {
        console.log(`You get a point`);
        // update score
        // 1. current score
        const currentScoreElement = document.getElementById('currentScore');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);

        // 2. increase by 1
        const newScore = currentScore + 1;
        // console.log(newScore);
        // 3. show updated score
        currentScoreElement.innerText = newScore;
        
        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame()
    }
    else {
        console.log(`You loose a life`);

        // life update
        // 1 get current life
        const currentLifeElement = document.getElementById('lifeScore');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);
        // 2 reduce life
        const newLife = currentLife - 1;
        // 3 update life
        currentLifeElement.innerText = newLife;

        if (newLife == 0) {
            
        }
    }

}


document.addEventListener('keyup', handleKeyboardKeyUpEvent);

function continueGame(){
    // step -1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet', alphabet);

    // set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}