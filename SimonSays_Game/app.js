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

    heading.innerText=`Level ${level}`;
    let randomIndex = Math.floor(Math.random()*4);
    let randomColor=btns[randomIndex];
    let randomBtn = document.querySelector(`.${randomColor}`)
    // console.log(randomBtn);
btnFlash(randomBtn);

}

function btnPress() {
    // console.log(this);
    let btn = this;
    btnFlashClick(btn);
}
let allbtns=document.querySelectorAll(".btn");

for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}