let weapon = ['rock', 'paper', 'scissor'];
let computerselection;
let playerselection;
let playerscore = 0;
let computerscore = 0;

game();

function getComputerSelection() { 
    let number;
    number = Math.floor(Math.random() * 3);
    computerselection = weapon [number]
    return(computerselection);
}

function getPlayerSelection(){
    playerselection = prompt ('Make Your Choice');
    if (playerselection != 'rock' && playerselection != 'paper' && playerselection != 'scissor'){
        alert ('Make another choice!');
        getPlayerSelection();
    }
    return (playerselection);
}

function round(){
    getPlayerSelection();
    getComputerSelection();
    
    switch (playerselection){
        case 'rock':{
            if (computerselection === playerselection){
                console.log("It's a tie! Try Again!");
                round();
            }
            if (computerselection === 'paper'){
                console.log("Computer wins! Paper beats rock.");
                computerscore ++;
                return (computerscore);
            }
            if (computerselection === 'scissor'){
                console.log("You Win! Rock beats scissor.");
                playerscore ++;
                return (playerscore);
            }
        }
        case 'paper':{
            if (computerselection === playerselection){
                console.log("It's a tie! Try Again!");
                round();
            }
            if (computerselection === 'scissor'){
                console.log("Computer wins! Scissor beats paper.");
                computerscore ++;
                return (computerscore);
            }
            if (computerselection === 'rock'){
                console.log("You Win! Paper beats rock.");
                playerscore ++;
                return (playerscore);
            }
        }
        case 'scissor':{
            if (computerselection === playerselection){
                console.log("It's a tie! Try Again!");
                round();
            }
            if (computerselection === 'rock'){
                console.log("Computer wins! Rock beats scissor.");
                computerscore ++;
                return (computerscore);
            }
            if (computerselection === 'paper'){
                console.log("You win the round! Scissor beats paper.");
                playerscore ++;
                return (playerscore);
            }
        }
    }
}

function game(){
    for (let i=0; i<5; i++){
        round();
    }
    if (playerscore > computerscore){
        console.log ("Congratulations, you win the game!");
    }
    else {
        console.log ("Oh no! The computer beat's you.")
    }

}