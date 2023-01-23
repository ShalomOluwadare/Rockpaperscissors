function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
  }
choice=['Rock', 'Paper', 'Scissors']
function getComputerChoice(){
    return choose(choice)
}
let playerScore=0;
let computerScore=0;
function playRound(playerSelection,computerSelection){
    playerSelection=playerSelection.toLowerCase()
    computerSelection=computerSelection.toLowerCase()
    if (playerSelection==='rock'&&computerSelection==='paper'){
         computerScore+=1
        return 'you lose! paper beats rock'
    }
    else if (playerSelection==='paper'&&computerSelection==='rock'){
         playerScore+=1     
        return 'you win! paper beats rock'  
        }
    else if (playerSelection==='scissors'&&computerSelection==='paper'){
         playerScore+=1
        return 'you win! scissors beats paper'
        }
    else if (playerSelection==='paper'&&computerSelection==='scissors'){
         computerScore+=1
         return 'you lose! scissors beats paper'
        }
    else if (playerSelection==='scissors'&&computerSelection==='rock'){
         computerScore+=1
         return 'you lose! rock beats scissors'
        }
    else if (playerSelection==='rock'&&computerSelection==='scissors'){
         playerScore+=1
        return 'you win! rock beats scissors'
    }
    else if (playerSelection===computerSelection){
        return'tie'
    }
    else{
         alert('please input a relevant value')
         playerScore-=1
         return 'penalty given'
         
    }
    
}


function game(){
    for (let i = 0; i < 5; i++) {
    const playerSelection = prompt('Rock, Paper or Scissors','Rock');
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log(playerScore,computerScore)
    } 
    if (playerScore===computerScore){
        alert(`Tie with ${playerScore} points`)
    }
    else if(playerScore>computerScore){
        alert(`you won by ${playerScore-computerScore} points`)
    }
    else if(playerScore<computerScore){
        alert(`you lost by ${computerScore-playerScore} points`)
    }
    startGame()
}

function startGame(){
    NewGame=prompt('start a new game? (yes or no)','yes')
    switch(NewGame==='yes'){
        case true:
            game()
            break;
        case null:
            alert('game closed')
            break; 
        case false:
            alert('game closed')
            break; 
    }
}
game()
