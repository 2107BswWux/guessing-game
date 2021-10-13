// guessing game

// generate a random number


// do while loop - a do while loop will run unitl thw while statment is false
// in this example when i is > 10 the loop will finish
let i = 0;

do {
    console.log(i);
    i++;
} while (i < 10);


function guessingGame(){
    // Math.random() gives us a randon number with decimals eg 0.23859394709
    // We can specify the aout of numbers by Math.random()*10
    // this will fire off a random number between 0 and 10
    // to create a whole number we use Math.floor();
    // try console.log Math.floor(2.39825698487) and see what happens
    // to make our random number a whole number we nest the Math.random() function inside of the Math.floo()
    // Math.floor(Math.random() *10)

    let computersNumber = Math.floor(Math.random() *10);
    console.log(computersNumber);
    let playerGuess;


    do {
        playerGuess = prompt('guess a number between 0 and 10');
        console.log(playerGuess, computersNumber);
        
        // making the comparrisons to check if our guess is > / < the computers number
        if(playerGuess > computersNumber){
            console.log("wrong answer too high");
        } else if(playerGuess < computersNumber){
            console.log("wrong answer too low");
        }
        // the code will keep running while our guess is not the same
    } while(playerGuess != computersNumber);
    // conole.log will be logged once we have guessed the correct number as the lopp will have finished
    console.log('you win');
}
guessingGame();