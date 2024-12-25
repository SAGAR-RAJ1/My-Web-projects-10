let userscore = 0;
let compscore = 0;

let choices = document.querySelectorAll(".choice");
    let msg=document.querySelector("#msg");
const genCompChoice = () => {
  //rock paper scissors
  let options = ["Rock", "Paper", "Scissor"];
  let random = Math.floor( Math.random()*3);
  if (random ==0) {
    return options[0];
  } else if (random ==1) {
    return options[1];
  } else {
    return options[2];
  }
};

let win;

const playGame = (UserChoice) => {
  //Generate computer choice
  let compchoice = genCompChoice();
  console.log("user Choice =", UserChoice);
  console.log("computer Choice =", compchoice);
  if (UserChoice == compchoice) {
    console.log("draw");
    win=null;
  } else if (UserChoice == "Rock") {
    if (compchoice == "Paper") {
      console.log("comp wins");win=false;
      compscore++;
    } else {
      console.log("you wins");win=true;
      userscore++;
    }
  } else if (UserChoice == "Paper") {
    if (compchoice == "Scissor") {
      console.log("comp wins");win=false;
      compscore++;
    } else {
      console.log("you wins");win=true;
      userscore++;
    }
  } else if (UserChoice == "Scissor") {
    if (compchoice == "Rock") {
      console.log("comp wins");win=false;
      compscore++;
    } else {
      console.log("you wins");win=true;
      userscore++;
    }
  }
};

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    let UserChoice = choice.getAttribute("id");
    playGame(UserChoice);

    let update1=document.querySelector("#man");
    update1.innerHTML=userscore;

    let update2=document.querySelector("#comp");
    update2.innerHTML=compscore;


  // Update the message displayed based on the result of the game
  if (win === true) {
    msg.innerText = "You won  ";
    msg.style.backgroundColor = "green"; // Change background color to green
  } else if (win === false) {
    msg.innerText = "You loose ";
    msg.style.backgroundColor = "red"; // Reset background color
  } else {
    msg.innerText = "Draw ";
    msg.style.backgroundColor = "grey"; // Reset background color
  }
        
      
  })
});

