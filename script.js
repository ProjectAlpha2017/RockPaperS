let score = 0;
let options = ['rock', 'paper', 'scissors'];

const updateDisplay = (score, player, computerPlayer) => {
    document.getElementById("score").innerHTML = score;
    document.getElementById("player").innerHTML = player
    document.getElementById("computer").innerHTML = computerPlayer
}

const buttonClick = event => {
    console.log(event); // log where clicked
    let clickedButton = event.target.id;
    if (
        clickedButton === 'rock' ||
        clickedButton === 'scissors' ||
        clickedButton === 'paper'
    ) {
        console.log('clicked a button');
        let computerPlayer = options[Math.floor(Math.random() * 2)]; //computer player is picked between 0 and 2
        let player = clickedButton;
        console.log(computerPlayer, player);
        //win events
        if (
            (computerPlayer === 'rock' && player === 'paper') ||
            (computerPlayer === 'paper' && player === 'scissors') ||
            (computerPlayer === 'scissors' && player === 'rock')
        ) {
            console.log("WON")
            score += 5
        
        //lose events
        } else if (
            (player === 'rock' && computerPlayer === 'paper') ||
            (player === 'paper' && computerPlayer === 'scissors') ||
            (player === 'scissors' && computerPlayer === 'rock')
        ) {
            console.log("lost")
            score = 2
        } else {
            console.log("draw")
        }
        updateDisplay(score, player, computerPlayer);
    }
};

document.addEventListener('click', buttonClick);
