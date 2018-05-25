let score = 0;
let options = ["rock", "paper", "scissors"]


const buttonClick = (event) => {
    console.log(event)  // log where clicked
    let clickedButton = event.target.id
    if (clickedButton === "rock"  || clickedButton === "scissors" || clickedButton ==="paper"){
        console.log("clicked a button")
        let computerPlayer = options[Math.floor(Math.random * 2)]; //computer player is picked between 0 and 2
        let player = clickedButton;
    }
}

document.addEventListener("click", buttonClick) 
