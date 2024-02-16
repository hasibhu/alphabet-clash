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
        // const currentScoreElement = document.getElementById('currentScore');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        
        // or we can use common function to get the current score

        const currentScore = getTextElementValueById('current-Score');

        // 2. increase by 1a
        const newScore = currentScore + 1;
        // console.log(newScore);
        // 3. show updated score
        // currentScore.innerText = newScore; this line will not function that is why we will use a function to set the innerText.
        setTextElementValueById('current-Score', newScore)
        
        // start a new round
        removeBackgroundColorById(expectedAlphabet);

        continueGame();
    }
    else {
        // console.log(`You loose a life`);
        // life update
        // step 1 get current life
        // const currentLifeElement = document.getElementById('lifeScore');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        const currentLife = getTextElementValueById('lifeScore');

        //step 2 reduce life
        const newLife = currentLife - 1;
        // step 3 update life
        // currentLifeElement.innerText = newLife;
        setTextElementValueById('lifeScore', newLife)


        if (newLife === 0) {

            gameOver();

            // const gameScoreSet = getTextElementValueById('finalGameScore');

            // // const finalScore = getTextElementValueById('current-Score');

            // gameScoreSet.innerText = newScore;
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

function play() {
    // hide everything except playground
    hideElementById('home-screen');
    hideElementById('score'); // will hide the final score screen 
    showElementById('play-ground');

    // reset  score and life
    setTextElementValueById('lifeScore', 3);
    setTextElementValueById('current-Score', 0);

    // remove background 


    continueGame();
}

function gameOver() {
    hideElementById('play-ground');
    showElementById('score');

    // update final score
    const lastScore = getTextElementValueById('current-Score');
    setTextElementValueById('finalGameScore', lastScore);
}