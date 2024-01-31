let userscore=0;
let computerscore=0;
const Choices=document.querySelectorAll(".Choice");
const msg=document.querySelector("#msg");
const userScores=document.querySelector("#user");
const computerScores=document.querySelector("#computer")
const computerChoice= () =>
{
    const option=["rock", "paper","scissors"];
    const randomi=Math.floor(Math.random() * 3);
    // rock paper scissors
    return option[randomi];
};
const drawGame= () =>
{
    console.log("Game was draw");
    msg.innerText="Game was draw, Play Again!";
    msg.style.backgroundColor="blue";
}
const showWinner=(userWin) =>
{
if(userWin)
{
    userscore++;
    userScores.innerText=userscore;
    console.log("You Win");
    msg.innerText="You Win!";
    msg.style.backgroundColor="green";
}
else
{
    computerscore++;
    computerScores.innerText=computerscore;
    console.log("You lose");
    msg.innerText="You Lose!";
    msg.style.backgroundColor="red";
}
}
const palyGame= (userChoice) =>
{
console.log("user choice = ", userChoice);
//computer choice
const computerc=computerChoice();
console.log("computer choice", computerc);
if(userChoice===computerc)
{
    //draw game
    drawGame();
}
else{
    let userWin=true;
    if(userChoice==="rock")
    {
        //scissors or paper
        userWin=computerc==="paper" ? false: true;
    }
    else if(userChoice==="paper")
    {
        //rock scissors
        userWin=computerc==="scissors" ?false:true;
    }
    else{
        // rock paper
         userWin=computerc==="rock"?false:true;
    }
    showWinner(userWin);
}
}
Choices.forEach((Choice) =>{
Choice.addEventListener("click", () =>
{
    const userChoice=Choice.getAttribute("id");
//console.log("choice was clicked", userChoice);
palyGame(userChoice);
});
});