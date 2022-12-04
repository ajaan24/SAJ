var gameSequenceEasy = [];
var userSequenceEasy = [];
var userLivesEasy = 3;
var userScoreEasy = 0;
var timer=20;
var cntdwn=setInterval(startTimer,1000);
clearInterval(cntdwn);
var url = "http://localhost:3000/post";
var userName;

setTimeout(function() {
    alert("Easy Mode\n\nYou will be shown a sequence of colours in the sequence display box." + 
        " Your task is to input the correct sequence by clicking the correct coloured buttons in order, within the time limit. You will lose a life if you get the sequence wrong (total 3 lives) or if the timer runs out." +
        "\n\nWhen you are ready (read instructions), click start to begin!");
}, 100);

function game(){
    addTogameSequenceEasy();
    userSequenceEasy.length = 0;

    document.getElementById("startBtn").disabled = true;
    displaySequence();
}

function userInput(num){
    if(userSequenceEasy.length<gameSequenceEasy.length){
        userSequenceEasy[userSequenceEasy.length] = num;
    }

    if(userSequenceEasy.length==gameSequenceEasy.length && gameSequenceEasy.length!=0){
        if(checkEqual()){
            alert("CORRECT!\n\nClick OK for the next round.");
            userScoreEasy++;
            game();
        }else if (!checkEqual()){
            userLivesEasy--;
            updateLives();
            if(userLivesEasy!=0){
                alert("WRONG!\n\nTry again after reviewing the sequence.");
            }else if(userLivesEasy==0){
                gameOver();
                clearInterval(cntdwn);
            }
            userSequenceEasy.length = 0;
            if(userLivesEasy!=0){
                displaySequence();
            }
        }
    }
}

function addTogameSequenceEasy(){
    gameSequenceEasy[gameSequenceEasy.length] = Math.floor(Math.random()*4+1);
}

function checkEqual(){
    var flag = true;
    for(j=0;j<gameSequenceEasy.length;j++){
        if(gameSequenceEasy[j]!=userSequenceEasy[j]){
            flag = false;
        }
    }
    return flag;
}

function displayColour(num){
    document.getElementById("display-sequence-text").innerHTML="";
    
    setTimeout(function(){
        document.getElementById("display-sequence").style.backgroundColor="black";
    },950);

    switch(num){
        case 1:
            document.getElementById("display-sequence").style.backgroundColor="red";
            break;
        case 2:
            document.getElementById("display-sequence").style.backgroundColor="blue";
            break;
        case 3:
            document.getElementById("display-sequence").style.backgroundColor="green";
            break;
        case 4:
            document.getElementById("display-sequence").style.backgroundColor="yellow";
            break;
        default:
            break;
    }
}

function displaySequence(){
    clearInterval(cntdwn);
    if (timer!=20){
        timer=20;
    }
    document.getElementById("clock").innerHTML = "Timer: " + timer;

    document.getElementById("redSquare").disabled = true;
    document.getElementById("blueSquare").disabled = true;
    document.getElementById("greenSquare").disabled = true;
    document.getElementById("yellowSquare").disabled = true;

    for(let i=0;i<gameSequenceEasy.length;i++){
        setTimeout(function(){
            displayColour(gameSequenceEasy[i]);
        },1000*i);
    }

    setTimeout(function(){
        document.getElementById("display-sequence").style.backgroundColor="white";
        document.getElementById("display-sequence-text").innerHTML="now input the sequence!";
        document.getElementById("redSquare").disabled = false;
        document.getElementById("blueSquare").disabled = false;
        document.getElementById("greenSquare").disabled = false;
        document.getElementById("yellowSquare").disabled = false;
    },1000*gameSequenceEasy.length);

    setTimeout(function() {
        cntdwn=setInterval(startTimer,1000);
        alert("Now input the sequence!");
    }, 1000*gameSequenceEasy.length+20);
}

function updateLives(){
    if(userLivesEasy==2){
        document.getElementById("hearts").src="images/twoheart.png";
    }else if(userLivesEasy==1){
        document.getElementById("hearts").src="images/oneheart.png";
    }else if(userLivesEasy==0){
        document.getElementById("hearts").src="images/zeroheart.png";
    }
}

function gameOver(){
    userName = prompt("Please enter your name", "");

    $.post(url+'?data='+JSON.stringify({
        'name':userName,
        'userScoreEasy':userScoreEasy
        })
    );
    
    document.getElementById("game").style.display="none";
    document.getElementById("game-over").style.display="block";
    document.getElementById("final-score").innerHTML=userName + "'s Final Score: " + userScoreEasy;
}

function startTimer(){
    document.getElementById("clock").innerHTML = "Timer: " + timer;
    if(timer<=0){
        userLivesEasy--;
        updateLives();
        if(userLivesEasy!=0){
            alert("YOU RAN OUT OF TIME!\n\nTry again after reviewing the sequence.");
        }else if(userLivesEasy==0){
            gameOver();
            clearInterval(cntdwn);
        }
        userSequenceEasy.length = 0;
        if(userLivesEasy!=0){
            displaySequence();
        }
    }
    timer--;
}