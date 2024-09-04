let gameseq=[];
let userseq=[];

let btns =["yellow", "red", "purple","green"];

let started =false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("started");
        started=true;

        levelup();
    }
    
});

function gameflash(btn){
    btn.classList.add("keyflash");
    setTimeout(function(){
        btn.classList.remove("keyflash");
    },80);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },80);
}

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;

    //random button choose 
    let randInd=Math.floor(Math.random()*4);
    let randColor=btns[randInd];
    let randbtn=document.querySelector(`.${randColor}`);
    
    gameseq.push(randColor);
    console.log(gameseq);
    gameflash(randbtn);

}

function checkans(idx){
    console.log("curr level",level);
    

    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,300);
        }
    }else{
        h2.innerHTML=`game over ! your score was <b>${level}</b> !  Now press any key to start `;

        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },100);
        reset();
    }
    
}


function btnpress(){
    let btn=this;
    userflash(btn);
    // console.log(this);

    usercolor=btn.getAttribute("id");
    // console.log(usercolor);
    userseq.push(usercolor);

    checkans(userseq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for (btn of allbtns){
    btn.addEventListener("click",btnpress);
}


function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}
