function getComputerChoice() {
    let ranumber = Math.floor(Math.random() * 3)
    let array = ['rock', 'paper', 'scissors']

    for (let counter = 0; counter <= ranumber; counter++) {
        if (counter === ranumber) {
            let answer = array[counter]
            return answer
        }
    }

}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    let result = ''
    let playerScore = 0
    let computerScore = 0

    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            result = 'Is a tie!'

        } else if (computerSelection === 'paper') {
            result = 'You Lose! Paper beats Rock'
            computerScore = 1

        } else if (computerSelection === 'scissors') {
            result = 'You Win! Rock beats Scissors'
            playerScore = 1

        }

    } else if (playerSelection === 'paper') {

        if (computerSelection === 'rock') {
            result = 'You Win! Paper beats Rock'
            playerScore = 1

        } else if (computerSelection === 'paper') {
            result = 'Is a tie!'

        } else if (computerSelection === 'scissors') {
            result = 'You Lose!  beats Paper'
            computerScore = 1

        }

    } else if (playerSelection === 'scissors') {

        if (computerSelection === 'rock') {
            result = 'You Lose! Rock beats Scissors'
            computerScore = 1

        } else if (computerSelection === 'paper') {
            result = 'You Win! Scissors beats Paper'
            playerScore = 1

        } else if (computerSelection === 'scissors') {
            result = 'Is a tie!'

        }
    }

    return [result, playerScore, computerScore]
}


console.log();

function game() {
    let playerScore = 0
    let computerScore = 0

    for (let counter = 0; counter < 5; counter++) {
        const playerSelection = prompt('Enter an option (Rock, Paper, Scissors): ');
        const computerSelection = getComputerChoice();
        score = playRound(playerSelection, computerSelection)
        playerScore += score[1]
        computerScore += score[2]
        console.log(score[0]);
        console.log('Player: ' + playerScore);
        console.log('Computer: ' + computerScore);
    }
}

game()