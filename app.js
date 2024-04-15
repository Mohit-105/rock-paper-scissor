let userscore = 0;
let botscore = 0;
const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
let usesc=document.querySelector("#user-score");
let botsc=document.querySelector("#bot-score");
const gencompchoice=()=>{
    const option=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return option[randIdx]; 
}
const draw=()=>{
    console.log("The game was draw!");
    msg.innerText="The game was Draw, Play again";
    msg.style.backgroundColor="blue";
    
}
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        console.log("You Win!!");
        msg.innerText=`You win! Your's ${userchoice} beats ${compchoice}`
        userscore+=1;
        usesc.innerText=userscore;
        msg.style.backgroundColor="green";
    }
    else{
        console.log("You Lose!!");

        msg.innerText=`You lose! Bot's ${compchoice} beats ${userchoice}`
        msg.style.backgroundColor="red";
        botscore+=1;
        botsc.innerText=botscore;
    }
}
const playgame=(userchoice)=>{
    console.log("user choice =",userchoice)
    
    //generate computer choice
    const compchoice=gencompchoice();
    console.log("comp choice =",compchoice);
if(userchoice===compchoice){
    draw();
}
else{
    let userwin=true;
    if(userchoice==="rock"){
        userwin=compchoice==="paper"?false:true;
    }
    else if(userchoice==="paper"){
        userwin=compchoice==="scissors"?false:true;
    }
    else if(userchoice==="scissors"){
        userwin=compchoice==="rock"?false:true;
    }
    showwinner(userwin,userchoice,compchoice);
}
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice=choice.getAttribute("id")
        playgame(userchoice);
    }
    )
})