let gameSeq=[];
let userSeq=[];
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

function levelup(){
    level++;

    heading.innerText=`Level ${level}`;

}