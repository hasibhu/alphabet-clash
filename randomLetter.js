

function randomLetter() {
    let letterString = 'abcdefghijklmonpqrstuvwxyz';
    let letter = letterString.split('');
    // console.log(letter);


    let randomNumber = Math.round(Math.random() * 25);
    // console.log(randomNumber);

    let letterOutput = letter[randomNumber];
    return letterOutput;
    // console.log(letterOutput);;
}

// console.log(randomLetter());