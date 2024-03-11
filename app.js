let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;

    let randInx = Math.floor(Math.random() * 3);
    let randColor = btns[randInx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq)

    gameFlash(randBtn);
}

function checkAns(inx){
   // console.log("curr level:",level);
   

   if(userSeq[inx]===gameSeq[inx]){
    if(userSeq.length===gameSeq.length){
        setTimeout(levelUp,1000);
    }
    console.log("same level");
   }else{
    h2.innerHTML = `Game over! Your Score was <b> ${level}</br></br> Press any key to start`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },150)
    reset();
   }
}
function btnPress() {
    
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns= document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}