const gameBox = document.querySelector("#gameBox");

// First I will need to create a grid of cards with different ids

function gridCreator () {
  for (let i=0; i<12; i++) {
    let div = document.createElement("div");
    div.style.width="150px";
    div.style.height="150px";
    div.style.color="white";
    div.id="gridSpace" + i;
    div.classList.add("gridSpaces")
    document.getElementById("gameBox").appendChild(div);
  }
}

gridCreator();


// then I will need to randomize the playing cards and place them on the grid


let numberOfCards=12;
let mouseOverCardId="";
let innerCard1="";
let innerCard2="";
let playerTurn=1;
let playerFirstChoice=50;
let playerSecondChoice=50;
let picId1="";
let picId2="";
let playerOneScore = 0;
let playerTwoScore = 0;
let oneTwoGone=0;
let threeFourGone=0;
let fiveSixGone=0;
let sevenEightGone=0;
let nineTenGone=0;
let elevenTwelveGone=0;
const playerOneScoreText = document.getElementById("playerOneScore");
const playerTwoScoreText = document.getElementById("playerTwoScore");
const turnCounter = document.getElementById("turnText");
const gameBoard = document.getElementById("gameBox");

function cardCreator () { 
  for (let i=0; i<numberOfCards; i++) {
    let divBorder = document.createElement("div");
    divBorder.style.width="120px";
    divBorder.style.height="140px";
    divBorder.style.background="white";
    divBorder.id="card" + "Border" + i;
    divBorder.classList.add("cardBlackBorder");
    let div = document.createElement("div");
    div.style.width="118px";
    div.style.height="134px";
    div.style.background="red";
    div.style.color="black";
    div.id="card" + i;
    let elem = document.createElement("img")
    elem.src = 'https://esl-classroom-games.com/?brizy_media=wp-3f36dcb54d4c3171bedb6a49913fc691.jpg&brizy_crop=iW%3D1170%26iH%3D1476%26oX%3D0%26oY%3D0%26cW%3D1170%26cH%3D1476';
    elem.classList.add("cardPicture");
    elem.style.width="0%";
    elem.style.height="130px";
    elem.id="pic"+i;
    div.addEventListener("click", ()=>{
      if(playerTurn===5){
        return;
      } else if (playerTurn===1 || playerTurn===3) {
      mouseOverCardId=divBorder.id;
      innerCard1=div.id;
      picId1=elem.id;
      chooseCard();}
      else if (playerTurn===2 || playerTurn===4){
        mouseOverCardId=divBorder.id;
        innerCard2=div.id;
        picId2=elem.id;
        chooseCard(); 
      }
    })
    div.classList.add("playingCards")
    // randomly pins a card to a grid space

    while (true) {
    let randomNumber = Math.floor(Math.random()*12);
    let newGridSpace = "gridSpace" + randomNumber;
    let lengthOfNode = document.getElementById(newGridSpace).childNodes.length;
    if (lengthOfNode<=0) {
      // Number on the card    
/*    let textDiv = document.createElement("div");
    textDiv.style.width="100%";
    textDiv.style.height="30px";
    textDiv.id="numberOnTop";
    textDiv.innerText=randomNumber;*/
    document.getElementById(newGridSpace).appendChild(divBorder);
    document.getElementById("card"+ "Border"+i).appendChild(div);
    document.getElementById("card" + i).appendChild(elem);  
// text    document.getElementById("card" + i).appendChild(textDiv);
// Places a number at the top of the card

/* Places and image on the card
    let elem = document.createElement("img")
    elem.src = 'https://esl-classroom-games.com/wp-content/uploads/brizy/imgs/cat-hat-408x400x0x0x408x400x1672799785.jpg';
    elem.style.height = '110px';
    elem.style.width = '100px';
    document.getElementById("card" + i).appendChild(elem); */
      break;
    }
}}}

cardCreator();

// then I will need to make the cards turn over when they have been clicked



function chooseCard () {
    document.getElementById(mouseOverCardId).style.width="0px";

    console.log(mouseOverCardId);
    if (playerTurn===1) {
      document.getElementById(innerCard1).style.width="0px";
      document.getElementById(innerCard1).style.background = "white";
      document.getElementById(innerCard1).style.border="0px";
      turnFirstCard();
    } else if (playerTurn===2) {
      document.getElementById(innerCard2).style.width="0px";
      document.getElementById(innerCard2).style.border="0px";
      document.getElementById(innerCard2).style.background = "white";
      turnSecondCard();
      playerSecondChoice=document.getElementById(mouseOverCardId);
    } else if (playerTurn===3) {
      document.getElementById(innerCard1).style.width="0px";
      document.getElementById(innerCard1).style.background = "white";
      document.getElementById(innerCard1).style.border="0px";
      turnFirstCard();    
    } else {
      document.getElementById(innerCard2).style.width="0px";
      document.getElementById(innerCard2).style.border="0px";
      document.getElementById(innerCard2).style.background = "white";
      turnSecondCard();
      playerSecondChoice=document.getElementById(mouseOverCardId);     
    }
} ;

function turnFirstCard () {
  if (mouseOverCardId==="card" + "Border" + 0 && oneTwoGone===0) {
    setTimeout(()=>{
    // Places and image on the card
    document.getElementById(picId1).style.width="100%"; 
    document.getElementById(mouseOverCardId).style.width="120px";
    document.getElementById(innerCard1).style.width="118px";
    },300);
    switchTurns();
    console.log("tunring first card")
    playerFirstChoice=0;
    } else if (mouseOverCardId==="card" + "Border" + 1 && oneTwoGone===0) {
      setTimeout(()=>{
        // Places and image on the card
        document.getElementById(picId1).style.width="100%"; 
        document.getElementById(mouseOverCardId).style.width="120px";
        document.getElementById(innerCard1).style.width="118px";
        },300); 
        switchTurns();
        playerFirstChoice=1;
      } else if (mouseOverCardId==="card" + "Border" + 2 && threeFourGone===0){
        setTimeout(()=>{
          // Places and image on the card
//          elem.src = 'https://esl-classroom-games.com/?brizy_media=wp-3f36dcb54d4c3171bedb6a49913fc691.jpg&brizy_crop=iW%3D1170%26iH%3D1476%26oX%3D0%26oY%3D0%26cW%3D1170%26cH%3D1476';
          document.getElementById(picId1).style.width="100%";     
          document.getElementById(mouseOverCardId).style.width="120px";
          document.getElementById(innerCard1).style.width="118px";
          },300); 
          switchTurns();
          playerFirstChoice=2;        
      } else if (mouseOverCardId==="card" + "Border" + 3 && threeFourGone===0){
        setTimeout(()=>{
          // Places and image on the card
//          elem.src = 'https://esl-classroom-games.com/?brizy_media=wp-3f36dcb54d4c3171bedb6a49913fc691.jpg&brizy_crop=iW%3D1170%26iH%3D1476%26oX%3D0%26oY%3D0%26cW%3D1170%26cH%3D1476';
          document.getElementById(picId1).style.width="100%";    
          document.getElementById(mouseOverCardId).style.width="120px";
          document.getElementById(innerCard1).style.width="118px";
          },300); 
          switchTurns();
          playerFirstChoice=3;
      } else if (mouseOverCardId==="card" + "Border" + 4 && fiveSixGone===0){
            setTimeout(()=>{
              // Places and image on the card
    //          elem.src = 'https://esl-classroom-games.com/?brizy_media=wp-3f36dcb54d4c3171bedb6a49913fc691.jpg&brizy_crop=iW%3D1170%26iH%3D1476%26oX%3D0%26oY%3D0%26cW%3D1170%26cH%3D1476';
              document.getElementById(picId1).style.width="100%";    
              document.getElementById(mouseOverCardId).style.width="120px";
              document.getElementById(innerCard1).style.width="118px";
              },300); 
              switchTurns();
              playerFirstChoice=4;
      } else if (mouseOverCardId==="card" + "Border" + 5 && fiveSixGone===0){
              setTimeout(()=>{
                // Places and image on the card
    //          elem.src = 'https://esl-classroom-games.com/?brizy_media=wp-3f36dcb54d4c3171bedb6a49913fc691.jpg&brizy_crop=iW%3D1170%26iH%3D1476%26oX%3D0%26oY%3D0%26cW%3D1170%26cH%3D1476';
                document.getElementById(picId1).style.width="100%";     
                document.getElementById(mouseOverCardId).style.width="120px";
                document.getElementById(innerCard1).style.width="118px";
                },300); 
                switchTurns();
                playerFirstChoice=5;
      } else if (mouseOverCardId==="card" + "Border" + 6 && sevenEightGone===0){
              setTimeout(()=>{
                // Places and image on the card
      //          elem.src = 'https://esl-classroom-games.com/?brizy_media=wp-3f36dcb54d4c3171bedb6a49913fc691.jpg&brizy_crop=iW%3D1170%26iH%3D1476%26oX%3D0%26oY%3D0%26cW%3D1170%26cH%3D1476';
                document.getElementById(picId1).style.width="100%";    
                document.getElementById(mouseOverCardId).style.width="120px";
                document.getElementById(innerCard1).style.width="118px";
                },300); 
                switchTurns();
                playerFirstChoice=6;
      } else if (mouseOverCardId==="card" + "Border" + 7 && sevenEightGone===0){
                setTimeout(()=>{
                  // Places and image on the card
        //          elem.src = 'https://esl-classroom-games.com/?brizy_media=wp-3f36dcb54d4c3171bedb6a49913fc691.jpg&brizy_crop=iW%3D1170%26iH%3D1476%26oX%3D0%26oY%3D0%26cW%3D1170%26cH%3D1476';
                  document.getElementById(picId1).style.width="100%";   
                  document.getElementById(mouseOverCardId).style.width="120px";
                  document.getElementById(innerCard1).style.width="118px";
                  },300); 
                  switchTurns();
                  playerFirstChoice=7;
      } else if (mouseOverCardId==="card" + "Border" + 8 && nineTenGone===0){
                  setTimeout(()=>{
                    // Places and image on the card
          //          elem.src = 'https://esl-classroom-games.com/?brizy_media=wp-3f36dcb54d4c3171bedb6a49913fc691.jpg&brizy_crop=iW%3D1170%26iH%3D1476%26oX%3D0%26oY%3D0%26cW%3D1170%26cH%3D1476';
                    document.getElementById(picId1).style.width="100%"; 
                    document.getElementById(mouseOverCardId).style.width="120px";
                    document.getElementById(innerCard1).style.width="118px";
                    },300); 
                    switchTurns();
                    playerFirstChoice=8;
        } else if (mouseOverCardId==="card" + "Border" + 9 && nineTenGone===0){
                    setTimeout(()=>{
                      // Places and image on the card
            //          elem.src = 'https://esl-classroom-games.com/?brizy_media=wp-3f36dcb54d4c3171bedb6a49913fc691.jpg&brizy_crop=iW%3D1170%26iH%3D1476%26oX%3D0%26oY%3D0%26cW%3D1170%26cH%3D1476';
                      document.getElementById(picId1).style.width="100%";    
                      document.getElementById(mouseOverCardId).style.width="120px";
                      document.getElementById(innerCard1).style.width="118px";
                      },300); 
                      switchTurns();
                      playerFirstChoice=9;
          } else if (mouseOverCardId==="card" + "Border" + 10 && elevenTwelveGone===0){
                      setTimeout(()=>{
                        // Places and image on the card
              //          elem.src = 'https://esl-classroom-games.com/?brizy_media=wp-3f36dcb54d4c3171bedb6a49913fc691.jpg&brizy_crop=iW%3D1170%26iH%3D1476%26oX%3D0%26oY%3D0%26cW%3D1170%26cH%3D1476';
                        document.getElementById(picId1).style.width="100%";  
                        document.getElementById(mouseOverCardId).style.width="120px";
                        document.getElementById(innerCard1).style.width="118px";
                        },300); 
                        switchTurns();
                        playerFirstChoice=10;
          } else if (mouseOverCardId==="card" + "Border" + 11 && elevenTwelveGone===0){
                        setTimeout(()=>{
                          // Places and image on the card
                //          elem.src = 'https://esl-classroom-games.com/?brizy_media=wp-3f36dcb54d4c3171bedb6a49913fc691.jpg&brizy_crop=iW%3D1170%26iH%3D1476%26oX%3D0%26oY%3D0%26cW%3D1170%26cH%3D1476';
                          document.getElementById(picId1).style.width="100%";    
                          document.getElementById(mouseOverCardId).style.width="120px";
                          document.getElementById(innerCard1).style.width="118px";
                          },300); 
                          switchTurns();
                          playerFirstChoice=11;
/*          } else if (mouseOverCardId==="card" + "Border" + 12 && !elevenTwelveGone===1){
                          setTimeout(()=>{
                            // Places and image on the card
                  //          elem.src = 'https://esl-classroom-games.com/?brizy_media=wp-3f36dcb54d4c3171bedb6a49913fc691.jpg&brizy_crop=iW%3D1170%26iH%3D1476%26oX%3D0%26oY%3D0%26cW%3D1170%26cH%3D1476';
                            document.getElementById(picId1).style.width="100%";     
                            document.getElementById(mouseOverCardId).style.width="120px";
                            document.getElementById(innerCard1).style.width="118px";
                            },300); 
                            switchTurns();
                            playerFirstChoice=11;
          } else if (mouseOverCardId==="card" + "Border" + 12){
                            setTimeout(()=>{
                              // Places and image on the card
                    //          elem.src = 'https://esl-classroom-games.com/?brizy_media=wp-3f36dcb54d4c3171bedb6a49913fc691.jpg&brizy_crop=iW%3D1170%26iH%3D1476%26oX%3D0%26oY%3D0%26cW%3D1170%26cH%3D1476';
                              document.getElementById(picId1).style.width="100%";     
                              document.getElementById(mouseOverCardId).style.width="120px";
                              document.getElementById(innerCard1).style.width="118px";
                              },300); 
                              switchTurns();
                              playerFirstChoice=12; */
}}

function turnSecondCard () {
  if (mouseOverCardId==="card"+ "Border" + 0 && playerFirstChoice===1 || mouseOverCardId==="card"+ "Border" + 1 && playerFirstChoice===0) {
    setTimeout(()=>{
    document.getElementById(picId2).style.width="100%";
    document.getElementById(mouseOverCardId).style.width="120px";
    document.getElementById(innerCard2).style.width="118px";
    },300);
    incrementScores();
    if(playerTurn===5){
      return;
    }
    switchTurns();
    setTimeout(()=>{
      document.getElementById("cardBorder1").style.transition="opacity 1.5s";
      document.getElementById("cardBorder0").style.transition="opacity 1.5s";
      document.getElementById("cardBorder1").style.opacity="0";
      document.getElementById("cardBorder0").style.opacity="0";
    },200);
    oneTwoGone=1;
    playerFirstChoice=50;
    playerSecondChoice=50;
  } else if(mouseOverCardId==="card"+ "Border" + 2 && playerFirstChoice===3 || mouseOverCardId==="card"+ "Border" + 3 && playerFirstChoice===2) {
    setTimeout(()=>{
      document.getElementById(picId2).style.width="100%";   
    document.getElementById(mouseOverCardId).style.width="120px";
    document.getElementById(innerCard2).style.width="118px";
    },300); 
    incrementScores();
    if(playerTurn===5){
      return;
    }
    switchTurns();
    setTimeout(()=>{
      document.getElementById("cardBorder2").style.transition="opacity 1.5s";
      document.getElementById("cardBorder3").style.transition="opacity 1.5s";
      document.getElementById("cardBorder2").style.opacity="0";
      document.getElementById("cardBorder3").style.opacity="0";
  },200); 
  threeFourGone=1;    
  playerFirstChoice=50;
  playerSecondChoice=50;
  } else if (mouseOverCardId==="card"+"Border" + 4 && playerFirstChoice===5 || mouseOverCardId==="card"+ "Border" + 5 && playerFirstChoice===4) {
    setTimeout(()=>{
    document.getElementById(picId2).style.width="100%";  
    document.getElementById(mouseOverCardId).style.width="120px";
    document.getElementById(innerCard2).style.width="118px";
    },300); 
    incrementScores();
    if(playerTurn===5){
      return;
    }
    switchTurns();
    setTimeout(()=>{
      document.getElementById("cardBorder4").style.transition="opacity 1.5s";
      document.getElementById("cardBorder5").style.transition="opacity 1.5s";
      document.getElementById("cardBorder4").style.opacity="0";
      document.getElementById("cardBorder5").style.opacity="0";
  },200);  
  fiveSixGone=1;
  playerFirstChoice=50;
  playerSecondChoice=50;
} else if (mouseOverCardId==="card"+"Border" + 6 && playerFirstChoice===7 || mouseOverCardId==="card"+ "Border" + 7 && playerFirstChoice===6) {
  setTimeout(()=>{
  document.getElementById(picId2).style.width="100%";  
  document.getElementById(mouseOverCardId).style.width="120px";
  document.getElementById(innerCard2).style.width="118px";
  },300); 
  incrementScores();
  if(playerTurn===5){
    return;
  }
  switchTurns();
  setTimeout(()=>{
    document.getElementById("cardBorder6").style.transition="opacity 1.5s";
    document.getElementById("cardBorder7").style.transition="opacity 1.5s";
    document.getElementById("cardBorder6").style.opacity="0";
    document.getElementById("cardBorder7").style.opacity="0";
},200);  
sevenEightGone=1;
playerFirstChoice=50;
playerSecondChoice=50;
} else if (mouseOverCardId==="card"+"Border" + 8 && playerFirstChoice===9 || mouseOverCardId==="card"+ "Border" + 9 && playerFirstChoice===8) {
  setTimeout(()=>{
  document.getElementById(picId2).style.width="100%";  
  document.getElementById(mouseOverCardId).style.width="120px";
  document.getElementById(innerCard2).style.width="118px";
  },300); 
  incrementScores();
  if(playerTurn===5){
    return;
  }
  switchTurns();
  setTimeout(()=>{
    document.getElementById("cardBorder8").style.transition="opacity 1.5s";
    document.getElementById("cardBorder9").style.transition="opacity 1.5s";
    document.getElementById("cardBorder8").style.opacity="0";
    document.getElementById("cardBorder9").style.opacity="0";
},200);  
nineTenGone=1;
playerFirstChoice=50;
playerSecondChoice=50;
} else if (mouseOverCardId==="card"+"Border" + 10 && playerFirstChoice===11 || mouseOverCardId==="card"+ "Border" + 11 && playerFirstChoice===10) {
  setTimeout(()=>{
  document.getElementById(picId2).style.width="100%";  
  document.getElementById(mouseOverCardId).style.width="120px";
  document.getElementById(innerCard2).style.width="118px";
  },300); 
  incrementScores();
  if(playerTurn===5){
    return;
  }
  switchTurns();
  setTimeout(()=>{
    document.getElementById("cardBorder10").style.transition="opacity 1.5s";
    document.getElementById("cardBorder11").style.transition="opacity 1.5s";
    document.getElementById("cardBorder10").style.opacity="0";
    document.getElementById("cardBorder11").style.opacity="0";
},200);  
elevenTwelveGone=1;
playerFirstChoice=50;
playerSecondChoice=50;
  } else {
    setTimeout(()=>{
      document.getElementById(picId2).style.width="100%";  
      document.getElementById(mouseOverCardId).style.width="120px";
      document.getElementById(innerCard2).style.width="118px";
      },400); 
  turnBack();
}

function turnBack () {
  setTimeout(()=>{
    playerFirstChoiceId = "cardBorder" + playerFirstChoice;
  document.getElementById(mouseOverCardId).style.width="0px";
  document.getElementById(playerFirstChoiceId).style.width="0px";
  flipBackCards();
},1000); 
}

function flipBackCards() {

  setTimeout(()=>{
    document.getElementById(picId1).style.width="0%";
    document.getElementById(picId2).style.width="0%";
  document.getElementById(mouseOverCardId).style.width="120px";
  document.getElementById(mouseOverCardId).style.height="140px";
  document.getElementById(mouseOverCardId).style.background="white";
  document.getElementById(mouseOverCardId).style.border="2px solid black";
  document.getElementById(playerFirstChoiceId).style.width="120px";
  document.getElementById(playerFirstChoiceId).style.height="140px";
  document.getElementById(playerFirstChoiceId).style.background="white";
  document.getElementById(playerFirstChoiceId).style.border="2px solid black";
  document.getElementById(innerCard1).style.width="118px";
  document.getElementById(innerCard1).style.height="134px";
  document.getElementById(innerCard1).style.background="red";
  document.getElementById(innerCard1).style.border="4px solid white";
  document.getElementById(innerCard2).style.width="118px";
  document.getElementById(innerCard2).style.height="134px";
  document.getElementById(innerCard2).style.background="red";
  document.getElementById(innerCard2).style.border="4px solid white";    
   },300);
   playerFirstChoice=50;
   playerSecondChoice=50;
   switchTurns(); 
  }}

//    document.getElementById(innerCard).style.width="118px";
//    document.getElementById(mouseOverCardId).style.width="120px";   

// if they match then the player scores a point



function switchTurns () {
  if(playerOneScore+playerTwoScore!==6) {
  if (playerTurn===1) {
    turnCounter.innerText="Player 1's turn";
    playerTurn=2;
  } else if (playerTurn===2) {
    turnCounter.innerText="Player 2's turn";
    playerTurn=3;
  } else if (playerTurn===3) {
    turnCounter.innerText="Player 2's turn";
    playerTurn=4;
  } else {
    turnCounter.innerText="Player 1's turn";
    playerTurn=1;
  }
}}

function incrementScores () {
  if (playerOneScore+playerTwoScore===5) {
    if (playerOneScore+playerTwoScore===5) {
      if (playerTurn===2) {
        playerOneScore++;
        playerOneScoreText.innerText="Score: " + playerOneScore;    
      } else if (playerTurn===4){
        playerTwoScore++;
        playerTwoScoreText.innerText="Score: " + playerTwoScore;
      }}
    endgame();
  }
  if (playerTurn===2  && playerOneScore+playerTwoScore<5) {
    playerOneScore++;
    playerOneScoreText.innerText="Score: " + playerOneScore;    
  } else if (playerTurn===4 && playerOneScore+playerTwoScore<5){
    playerTwoScore++;
    playerTwoScoreText.innerText="Score: " + playerTwoScore;
  }
}

function endgame () {
  setTimeout(()=>{  
    if (playerOneScore>playerTwoScore) {
    turnCounter.innerText="Player One Wins!";
  } else if (playerTwoScore>playerOneScore) {
    turnCounter.innerText="Player Two Wins!";
  } else {
    turnCounter.innerText="It's a Draw!";
  }
  playerTurn=5;
},1000)
}

const resetButtonVar = document.getElementById("resetButton");
resetButtonVar.addEventListener("click", ()=>{
  resetGame();
})

function resetGame () {
  for (let i=0;i<12;i++) {
    let elem = "gridSpace" + i;
    document.getElementById(elem).remove();
}
turnCounter.innerText="Player 1's turn";
gameBoard.innerText="";
playerOneScoreText.innerText="Score: 0";
playerTwoScoreText.innerText="Score: 0";  
numberOfCards=12;
mouseOverCardId="";
innerCard1="";
innerCard2="";
playerTurn=1;
playerFirstChoice=50;
playerSecondChoice=50;
picId1="";
picId2="";
playerOneScore = 0;
playerTwoScore = 0;
oneTwoGone=0;
threeFourGone=0;
fiveSixGone=0;
sevenEightGone=0;
nineTenGone=0;
elevenTwelveGone=0;
gridCreator();
cardCreator();

}