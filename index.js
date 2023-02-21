const button = document.querySelectorAll('button');
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const playerscore=document.querySelector('.playernum')
const computerscore=document.querySelector('.compnum')
const title=document.querySelector('.title')
const compselection=document.querySelector('.compselection')
const playerselection=document.querySelector('.playerselection')

let playerSelection;
let playerScore=0;
let computerScore=0;

function start(){
    title.textContent='please pick an option'
    button.forEach(but=>{
        but.addEventListener('click',()=>{
            playerSelection=String(but.getAttribute('class'))
            game()
        })
    })
};


function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
  };
choice=['rock', 'paper', 'scissors']
rounds=[3,4,5,6,7,8,9]

function getComputerChoice(){
    return choose(choice)
};
roundNumber=choose(rounds)


function playRound(playerSelection,computerSelection){
    computerSelection=computerSelection.toLowerCase()
    compselection.textContent=computerSelection
    playerselection.textContent=playerSelection
    if (playerSelection==='rock'&&computerSelection==='paper'){
         computerScore+=1
        title.textContent='you lose! paper beats rock'
    }
    else if (playerSelection==='paper'&&computerSelection==='rock'){
         playerScore+=1     
         title.textContent='you win! paper beats rock'  
        }
    else if (playerSelection==='scissors'&&computerSelection==='paper'){
         playerScore+=1
         title.textContent='you win! scissors beats paper'
        }
    else if (playerSelection==='paper'&&computerSelection==='scissors'){
         computerScore+=1
         title.textContent= 'you lose! scissors beats paper'
        }
    else if (playerSelection==='scissors'&&computerSelection==='rock'){
         computerScore+=1
         title.textContent='you lose! rock beats scissors'
        }
    else if (playerSelection==='rock'&&computerSelection==='scissors'){
         playerScore+=1
         title.textContent= 'you win! rock beats scissors'
    }
    else if (playerSelection===computerSelection){
        return title.textContent='tie'
    }
    
    
}


function game(){
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    console.log(playerScore,computerScore)
    playerscore.textContent=playerScore
    computerscore.textContent=computerScore
    if (playerScore===computerScore===roundNumber){
        alert(`It's a tie`)
        title.textContent=`It's a tie`
    }
    else if(playerScore===roundNumber){
        alert(`Game Over! You win`)
        title.textContent=`Game Over! You win`
    }
    else if(computerScore===roundNumber){
        alert(`Game Over! Computer Wins`)
        title.textContent=`Game Over! Computer Wins`
    }
}

function startGame(){
    NewGame=confirm(`start a new game? (yes or no) \n first to ${roundNumber} points`)
    switch(NewGame){
        case true:
            start()
            break;
        case false:
            alert('game closed')
            break; 
    }
}

startGame()