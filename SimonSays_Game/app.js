let gameSeq=[];
let userSeq=[];
let btns=["pink","blue","orange","purple"];
let heading = document.querySelector("h2");
let start=false;
let level = 0;

document.addEventListener("keypress",()=>{
    if(start==false){
    console.log("Game Started");
    start=true;
levelup()
    }
})
function checkAns(index){
    // let index= level-1;   fixed index need to change
    if (userSeq[index]===gameSeq[index]) {
        console.log("correct");
        if(userSeq.length==gameSeq.length){
             setTimeout(levelup,1000);
        }
    } else {
        heading.innerText="Game Over! Press any key to start again" 
        start=false;
        gameSeq=[];
        userSeq=[];
        level=0;  
    }

}
function btnFlash(btn){
btn.classList.add("flash");
setTimeout(() => {
    btn.classList.remove("flash");}, 250);
}
function btnFlashClick(btn){
btn.classList.add("userflash");
setTimeout(() => {
    btn.classList.remove("userflash");}, 150);
}

function levelup(){
    level++;
    userSeq=[];

    heading.innerText=`Level ${level}`;
    let randomIndex = Math.floor(Math.random()*4);
    let randomColor=btns[randomIndex];
    let randomBtn = document.querySelector(`.${randomColor}`)
    // console.log(randomBtn);
    gameSeq.push(randomColor);
    console.log(gameSeq);
btnFlash(randomBtn);

}

function btnPress() {
    // console.log(this);
    let btn = this;
    btnFlashClick(btn);

 userColor = btn.getAttribute("id");
 console.log(userColor);
 userSeq.push(userColor);
 checkAns(userSeq.length-1);
}

let allbtns=document.querySelectorAll(".btn");

for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}