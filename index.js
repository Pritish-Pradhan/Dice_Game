var randomNumber1 = Math.floor(Math.random()*6) + 1;
switch(randomNumber1){
    case 1 :
        document.querySelector("img").setAttribute("src","./images/dice1.png");
        break;
    case 2 :
        document.querySelector("img").setAttribute("src","./images/dice2.png");
        break;
    case 3 :
        document.querySelector("img").setAttribute("src","./images/dice3.png");
        break;
    case 4 :
        document.querySelector("img").setAttribute("src","./images/dice4.png");
        break;
    case 5 :
        document.querySelector("img").setAttribute("src","./images/dice5.png");        
}

var randomNumber2 = Math.floor(Math.random()*6) + 1;
switch(randomNumber2){
    case 1 :
        document.querySelector(".img2").setAttribute("src","./images/dice1.png");
        break;
    case 2 :
        document.querySelector(".img2").setAttribute("src","./images/dice2.png");
        break;
    case 3 :
        document.querySelector(".img2").setAttribute("src","./images/dice3.png");
        break;
    case 4 :
        document.querySelector(".img2").setAttribute("src","./images/dice4.png");
        break;
    case 5 :
        document.querySelector(".img2").setAttribute("src","./images/dice5.png");        
}

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "&#128681Player1 Wins!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player2 Wins!&#128681";
}
else{
    document.querySelector("h1").innerHTML = "&#128681Draw!&#128681";
}