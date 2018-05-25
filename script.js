let score = 0;
let options = ['Rock', 'Paper', 'Scissors'];

const updateDisplay = (score, player, computerPlayer) => {
    document.getElementById("score").innerHTML = score;
    document.getElementById("player").innerHTML = player
    document.getElementById("computer").innerHTML = computerPlayer
}

const buttonClick = event => {
    console.log(event); // log where clicked
    let clickedButton = event.target.id;
    if (
        clickedButton === 'Rock' ||
        clickedButton === 'Scissors' ||
        clickedButton === 'Paper'
    ) {
        console.log('clicked a button');
        let computerPlayer = options[Math.floor(Math.random() * 2)]; //computer player is picked between 0 and 2
        let player = clickedButton;
        console.log(computerPlayer, player);
        //win events
        if (
            (computerPlayer === 'Rock' && player === 'Paper') ||
            (computerPlayer === 'Paper' && player === 'Scissors') ||
            (computerPlayer === 'Scissors' && player === 'Rock')
        ) {
            console.log("WON")
            score += 5
        
        //lose events
        } else if (
            (player === 'Rock' && computerPlayer === 'Paper') ||
            (player === 'Paper' && computerPlayer === 'Scissors') ||
            (player === 'Scissors' && computerPlayer === 'Rock')
        ) {
            console.log("lost")
            score -= 2
        } else {
            console.log("draw")
        }
        updateDisplay(score, player, computerPlayer);
    }
};

document.addEventListener('click', buttonClick);
