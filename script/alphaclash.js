

function play() {
    console.log(`I am clicked`);

    //step 1:  hide home screen
    const homeSection = document.getElementById('home');
    
    homeSection.classList.add('hidden')


    const playSection = document.getElementById('playground');
    
    playSection.classList.remove('hidden')



}