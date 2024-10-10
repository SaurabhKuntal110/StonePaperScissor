let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

//generate comp choice
const genCompChoice = () => {
    const options = ["Stone", "Paper", "Scissors"];
     const rndmIdx = Math.floor(Math.random()*3);
     return options[rndmIdx];
 }

const drawGame = () => {
    msg.innerText = "Game was draw, Play again!";
    msg.style.backgroundColor = "#fe5f55";
    msg.style.color = "#333745"
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin === true){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        msg.style.color = "#eef5db";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose. ${userChoice} lost to ${compChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "#eef5db";
    }
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if(userChoice === compChoice){
        //draw game
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice === "Stone"){
            // paper,scissor
            userWin = compChoice === "Scissors" ? true : false;
        } 
        else if(userChoice === "Paper"){
            //stone,scissor
            userWin = compChoice === "Stone"? true : false;
        }
        else if(userChoice === "Scissors"){
            //stone,paper
            userWin = compChoice === "Paper"? true : false;    
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

//check which choice has the user selected
choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id"); // help access other attributes of the choice 
        playGame(userChoice); //call playgame function
    })
});