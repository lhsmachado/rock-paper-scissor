const weapon = ['rock', 'paper', 'scissor'];
let computerselection;
let playerselection;
let playerscore = 0;
let computerscore = 0;

document.getElementById("rock").addEventListener("click", function(){
    playerselection = 'rock';
    round();
})
document.getElementById("paper").addEventListener("click", function(){
    playerselection = 'paper';
    round();
})
document.getElementById("scissor").addEventListener("click", function(){
    playerselection = 'scissor';
    round();
})

//game();

function getComputerSelection() { 
    let number;
    number = Math.floor(Math.random() * 3);
    computerselection = weapon [number]
    return(computerselection);
}

function round(){
    getComputerSelection();
    let resultado;
    if (computerselection== 'paper' && playerselection=='scissor' || computerselection=='rock' && playerselection=='paper' ||
        computerselection=='scissor' && playerselection=='rock')
        {
            resultado = `<p>Você ganhou, parabéns ${playerselection} ganhou de ${computerselection}</p> `
            playerscore ++;
        }
    if (playerselection=='paper' && computerselection=='scissor' || playerselection=='rock' && computerselection=='paper' ||
        playerselection=='scissor' && computerselection=='rock')
        {
            resultado = `<p>Você perdeu ${playerselection} perdeu de ${computerselection}</p> `
            computerscore ++;
        }
    
    if (computerselection==playerselection)
    {
        resultado = `<p>Isso foi um empate, tente novamente<p>`
    }
        document.getElementById("resultado").innerHTML = resultado;
        playerselection = '';
    }