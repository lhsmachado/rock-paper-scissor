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
    
    if (computerselection== 'paper' && playerselection=='scissor' || computerselection=='rock' && playerselection=='paper' ||
        computerselection=='scissor' && playerselection=='rock')
        {
            console.log ("You win this round!")
            playerscore ++;
        }
    if (playerselection=='paper' && computerselection=='scissor' || playerselection=='rock' && computerselection=='paper' ||
        playerselection=='scissor' && computerselection=='rock')
        {
            console.log ("Oh no! You lose the round!")
            computerscore ++;
        }
    
    if (computerselection==playerselection)
    {
        console.log ("It's a Tie, please try again!")
        round();
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