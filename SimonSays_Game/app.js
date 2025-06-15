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

function levelup(){
    level++;

    heading.innerText=`Level ${level}`;
    let randomIndex = Math.floor(Math.random()*4);
    let randomColor=btns[randomIndex];
    let randomBtn = document.querySelector(`.${randomColor}`)
    console.log(randomBtn);
btnFlash(randomBtn);

}