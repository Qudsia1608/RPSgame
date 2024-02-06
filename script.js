let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice");

//get user choice and pass it tonplay game
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice= choice.getAttribute("id");
        playgame(userchoice);
    });
});

//function to generate comp choice 
const genCompChoice=()=>{
    const choiceArr=["rock","paper","scissor"];
    const randIndx= Math.floor(Math.random()*3);
    return choiceArr[randIndx];
};

const playgame=(userchoice)=>{
    console.log("user choice=",userchoice);
    //generate comp choice
    const compchoice=genCompChoice();
    console.log("comp choice=",compchoice);
    document.querySelector("#msg").innerText="Computer played "+compchoice;

    if(userchoice===compchoice){
        drawGame();
    }
    else{
        let userWin= true;
        if (userchoice==="rock")//comp choice cant be rock else it would be draw
        {
            userWin= compchoice==="paper"?false:true;
        } 
        if (userchoice==="paper")//comp choice isnt paper
        {
            userWin= compchoice==="rock"?true:false;
        } 
        if (userchoice==="scissor")//comp choice isnt scissor
        {
            userWin= compchoice==="rock"?false:true;
        } 
        showWinner(userWin);
    }
};
const drawGame=()=>{
    document.querySelector("#res").innerText="It's a Draw!";
    document.querySelector("#res").style.visibility="visible";
}
const showWinner=(userWin)=>{
    if(userWin){
        document.querySelector("#res").innerText="You Won!";
        userScore=userScore+1;
        document.querySelector("#userscr").innerText=userScore;
        document.querySelector("#res").style.visibility= "visible";

    }
    else{
        document.querySelector("#res").innerText="Computer Won :(";
        compScore=compScore+1;
        document.querySelector("#compscr").innerText=compScore;
        document.querySelector("#res").style.visibility="visible";
    }
}