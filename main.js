const randomNumber = Math.floor(Math.random() * 10 + 1);
const submitBtn = document.getElementById('submit-guess');
const outputText = document.getElementById('output');
const guesses = document.querySelector('.guesses')
const userInput =  document.querySelector('#user-input');
let guessCount = 1;

 
console.log('Random number', randomNumber)

function checkGuess(){
    const inputedGuess = document.querySelector('#user-input').value;
    if(guessCount === 1){
        guesses.textContent = 'Previous Guesses: '

    }


    if (inputedGuess == randomNumber){
        outputText.textContent = `You guessed correct! The number was ${randomNumber}. Reload to play again`;
        outputText.style.color = 'green';
        gameOver();

    }else if(inputedGuess < 1 || inputedGuess > 10){
        outputText.textContent = 'Enter an number from 1 to 10';
        outputText.style.color = 'red'
    } 
    else if(guessCount === 1 && inputedGuess != randomNumber){
        outputText.textContent = `${inputedGuess} is not correct. 2 guesses left`;
        outputText.style.color = 'red'   
    }else if(guessCount === 2 && inputedGuess != randomNumber){
        outputText.textContent = `${inputedGuess} is not correct. 1 guess left`;
        outputText.style.color = 'red'   
    }else if(guessCount === 3 && inputedGuess != randomNumber){
        outputText.textContent = `Game Over. The correct number was ${randomNumber}. Reload to play again`;
        outputText.style.color = 'red' 
        gameOver() 
    }else{

    }
    guessCount++;
    inputedGuess.value = '';
}

function gameOver(){
    userInput.disabled = true;
    submitBtn.disabled = true;
    

}
submitBtn.addEventListener('click', checkGuess);
