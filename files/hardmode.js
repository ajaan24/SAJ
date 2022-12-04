var gameSequenceHard = [];
var userSequenceHard = [];
var userLivesHard = 3;
var userScoreHard = 0;
var timer=20;
var cntdwn=setInterval(startTimer,1000);
clearInterval(cntdwn);
var url = "http://localhost:3000/post";
var userName;

setTimeout(function() {
    alert("Hard Mode\n\nYou will be shown a sequence of numbers in the sequence display box." + 
        " Your task is to input the correct sequence by clicking the correct numbered buttons in order, within the time limit. You will lose a life if you get the sequence wrong (total 3 lives) or if the timer runs out." +
        "\n\nWhen you are ready (read instructions), click start to begin!");
}, 100);

function game(){
    addTogameSequenceHard();
    userSequenceHard.length = 0;

    document.getElementById("startBtn").disabled = true;
    displaySequence();
}

function userInput(num){
    if(userSequenceHard.length<gameSequenceHard.length){
        userSequenceHard[userSequenceHard.length] = num;
    }

    if(userSequenceHard.length==gameSequenceHard.length && gameSequenceHard.length!=0){
        if(checkEqual()){
            alert("CORRECT!\n\nClick OK for the next round.");
            userScoreHard++;
            game();
        }else if (!checkEqual()){
            userLivesHard--;
            updateLives();
            if(userLivesHard!=0){
                alert("WRONG!\n\nTry again after reviewing the sequence.");
            }else if(userLivesHard==0){
                gameOver();
                clearInterval(cntdwn);
            }
            userSequenceHard.length = 0;
            if(userLivesHard!=0){
                displaySequence();
            }
        }
    }
}

function addTogameSequenceHard(){
    gameSequenceHard[gameSequenceHard.length] = Math.floor(Math.random()*9+1);
}

function checkEqual(){
    var flag = true;
    for(j=0;j<gameSequenceHard.length;j++){
        if(gameSequenceHard[j]!=userSequenceHard[j]){
            flag = false;
        }
    }
    return flag;
}

function displayNumber(num){
    document.getElementById("display-sequence-text").innerHTML="";
    
    setTimeout(function(){
        document.getElementById("display-sequence").style.backgroundColor="black";
    },950);

    document.getElementById("display-sequence").style.backgroundColor="white";
    document.getElementById("display-sequence-text").style.fontSize="100px";
    document.getElementById("display-sequence-text").style.marginTop="28%";

    switch(num){
        case 1:
            document.getElementById("display-sequence-text").innerHTML="1";
            break;
        case 2:
            document.getElementById("display-sequence-text").innerHTML="2";
            break;
        case 3:
            document.getElementById("display-sequence-text").innerHTML="3";
            break;
        case 4:
            document.getElementById("display-sequence-text").innerHTML="4";
            break;
        case 5:
            document.getElementById("display-sequence-text").innerHTML="5";
            break;
        case 6:
            document.getElementById("display-sequence-text").innerHTML="6";
            break;
        case 7:
            document.getElementById("display-sequence-text").innerHTML="7";
            break;
        case 8:
            document.getElementById("display-sequence-text").innerHTML="8";
            break;
        case 9:
            document.getElementById("display-sequence-text").innerHTML="9";
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

    document.getElementById("square-one").disabled = true;
    document.getElementById("square-two").disabled = true;
    document.getElementById("square-three").disabled = true;
    document.getElementById("square-four").disabled = true;
    document.getElementById("square-five").disabled = true;
    document.getElementById("square-six").disabled = true;
    document.getElementById("square-seven").disabled = true;
    document.getElementById("square-eight").disabled = true;
    document.getElementById("square-nine").disabled = true;

    for(let i=0;i<gameSequenceHard.length;i++){
        setTimeout(function(){
            displayNumber(gameSequenceHard[i]);
        },1000*i);
    }

    setTimeout(function(){
        document.getElementById("display-sequence").style.backgroundColor="white";
        document.getElementById("display-sequence-text").style.fontSize="20px";
        document.getElementById("display-sequence-text").style.marginTop="45%";
        document.getElementById("display-sequence-text").innerHTML="now input the sequence!";
        document.getElementById("square-one").disabled = false;
        document.getElementById("square-two").disabled = false;
        document.getElementById("square-three").disabled = false;
        document.getElementById("square-four").disabled = false;
        document.getElementById("square-five").disabled = false;
        document.getElementById("square-six").disabled = false;
        document.getElementById("square-seven").disabled = false;
        document.getElementById("square-eight").disabled = false;
        document.getElementById("square-nine").disabled = false;
    },1000*gameSequenceHard.length);

    setTimeout(function() {
        cntdwn=setInterval(startTimer,1000);
        alert("Now input the sequence!");
        shufflePos();
    }, 1000*gameSequenceHard.length+20);
}

function updateLives(){
    if(userLivesHard==2){
        document.getElementById("hearts").src="images/twoheart.png";
    }else if(userLivesHard==1){
        document.getElementById("hearts").src="images/oneheart.png";
    }else if(userLivesHard==0){
        document.getElementById("hearts").src="images/zeroheart.png";
    }
}

function gameOver(){
    userName = prompt("Please enter your name", "");

    $.post(url+'?data='+JSON.stringify({
        'name':userName,
        'userScoreHard':userScoreHard
        })
    );

    document.getElementById("game").style.display="none";
    document.getElementById("game-over").style.display="block";
    document.getElementById("final-score").innerHTML=userName + "'s Final Score: " + userScoreHard;
}

function startTimer(){
    document.getElementById("clock").innerHTML = "Timer: " + timer;
    if(timer<=0){
        userLivesHard--;
        updateLives();
        if(userLivesHard!=0){
            alert("YOU RAN OUT OF TIME!\n\nTry again after reviewing the sequence.");
        }else if(userLivesHard==0){
            gameOver();
            clearInterval(cntdwn);
        }
        userSequenceHard.length = 0;
        if(userLivesHard!=0){
            displaySequence();
        }
    }
    timer--;
}

var positionArray = [1,2,3,4,5,6,7,8,9];
var colourArray = ["red","blue","green", "yellow"];

function shuffleCol(){
    for(var a = colourArray.length-1;a>0;a--){
        var b = Math.floor(Math.random()*(a+1))
        var temp = colourArray[a];
        colourArray[a] = colourArray[b];
        colourArray[b] = temp;
    }
}

function shufflePos(){
    for(var m = positionArray.length-1;m>0;m--){
        var n = Math.floor(Math.random()*(m+1))
        var temp = positionArray[m];
        positionArray[m] = positionArray[n];
        positionArray[n] = temp;
    }
    shuffleCol();

    document.getElementById("square-one").innerHTML = positionArray[0];
    document.getElementById("square-one").setAttribute("onclick","userInput("+positionArray[0]+")");
    document.getElementById("square-one").style.color = colourArray[0];
    document.getElementById("square-one").style.backgroundColor = colourArray[1];
    shuffleCol();

    document.getElementById("square-two").innerHTML = positionArray[1];
    document.getElementById("square-two").setAttribute("onclick","userInput("+positionArray[1]+")");
    document.getElementById("square-two").style.color = colourArray[0];
    document.getElementById("square-two").style.backgroundColor = colourArray[1];
    shuffleCol();

    document.getElementById("square-three").innerHTML = positionArray[2];
    document.getElementById("square-three").setAttribute("onclick","userInput("+positionArray[2]+")");
    document.getElementById("square-three").style.color = colourArray[0];
    document.getElementById("square-three").style.backgroundColor = colourArray[1];
    shuffleCol();

    document.getElementById("square-four").innerHTML = positionArray[3];
    document.getElementById("square-four").setAttribute("onclick","userInput("+positionArray[3]+")");
    document.getElementById("square-four").style.color = colourArray[0];
    document.getElementById("square-four").style.backgroundColor = colourArray[1];
    shuffleCol();

    document.getElementById("square-five").innerHTML = positionArray[4];
    document.getElementById("square-five").setAttribute("onclick","userInput("+positionArray[4]+")");
    document.getElementById("square-five").style.color = colourArray[0];
    document.getElementById("square-five").style.backgroundColor = colourArray[1];
    shuffleCol();

    document.getElementById("square-six").innerHTML = positionArray[5];
    document.getElementById("square-six").setAttribute("onclick","userInput("+positionArray[5]+")");
    document.getElementById("square-six").style.color = colourArray[0];
    document.getElementById("square-six").style.backgroundColor = colourArray[1];
    shuffleCol();

    document.getElementById("square-seven").innerHTML = positionArray[6];
    document.getElementById("square-seven").setAttribute("onclick","userInput("+positionArray[6]+")");
    document.getElementById("square-seven").style.color = colourArray[0];
    document.getElementById("square-seven").style.backgroundColor = colourArray[1];
    shuffleCol();

    document.getElementById("square-eight").innerHTML = positionArray[7];
    document.getElementById("square-eight").setAttribute("onclick","userInput("+positionArray[7]+")");
    document.getElementById("square-eight").style.color = colourArray[0];
    document.getElementById("square-eight").style.backgroundColor = colourArray[1];
    shuffleCol();

    document.getElementById("square-nine").innerHTML = positionArray[8];
    document.getElementById("square-nine").setAttribute("onclick","userInput("+positionArray[8]+")");
    document.getElementById("square-nine").style.color = colourArray[0];
    document.getElementById("square-nine").style.backgroundColor = colourArray[1];
    shuffleCol();
}
