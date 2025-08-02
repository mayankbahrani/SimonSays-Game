let gameSeq = [];
let userSeq = [];

let game = ["yellow","red","green","purple"];

let start = false;
let level = 0;


document.addEventListener("keypress",function(){
    if(start == false){
        start = true;
        console.log("game started");
        levelup();
    }
})

function flash(btn){
    btn.classList.add("gameFlash");
    setTimeout(function (){
       btn.classList.remove("gameFlash");
    } , 200)
}

function levelup(){
    userSeq = [];
    level++;
    let h2 = document.querySelector("h2");
    h2.innerHTML = `level : ${level}`;

    let random = Math.floor(Math.random() * 3);
    //console.log(random);

    let newColor = game[random];
    //console.log(newColor);

    let randomBtn = document.querySelector(`.${newColor}`);

    flash(randomBtn);

    gameSeq.push(newColor);
    console.log(gameSeq);

}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function (){
       btn.classList.remove("userFlash");
    } , 200)
}


function user(){
    let btn = this;
    userFlash(btn);
    let userColor = this.id;
    //console.log(userColor);
    userSeq.push(userColor);
    console.log(userSeq);

    let idx = userSeq.length-1;
   // console.log(idx);

    comp(userSeq.length -1);


}

let btns = document.querySelectorAll(".box");
for(btn of btns){
    btn.addEventListener("click",user);
}

function comp(idx){
    if(gameSeq[idx] === userSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelup,500);
        }
        console.log("true");
        //userSeq = [];
        
    }else{
        gameEnd();
    }
}

let body = document.querySelector("body");
body.classList.add("end");

function end(){
    body.classList.add("endFlash");
    setTimeout(function (){
       body.classList.remove("endFlash");
    } , 200)
}



function gameEnd(){
    end();
    start = false;
    let h2 = document.querySelector("h2");
    h2.innerHTML = `your score was <b>${level}<b>. <br>press any key to restart `;
    level = 0;
    gameSeq = [];
    userSeq = [];

}



