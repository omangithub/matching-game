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
let innerCard="";
let playerTurn=1;
let playerFirstChoice=50;

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
    div.addEventListener("click", ()=>{
      mouseOverCardId=divBorder.id;
      innerCard=div.id;
      chooseCard();
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
    let myCard = document.getElementById(mouseOverCardId);
    document.getElementById(mouseOverCardId).style.width="0px";
    let cardBack = document.getElementById(innerCard);
    document.getElementById(innerCard).style.width="0px";
    cardBack.style.border="0px";
    cardBack.style.background = "white";
    console.log(mouseOverCardId);
    if (playerTurn===1) {
      turnFirstCard();
    } else if (playerTurn===2) {
      turnSecondCard();
    }
} ;

function turnFirstCard () {
  console.log("I'm here");
  if (mouseOverCardId==="card" + "Border" + 0 ) {
    setTimeout(()=>{
    // Places and image on the card
    let elem = document.createElement("img")
    elem.src = 'https://esl-classroom-games.com/wp-content/uploads/brizy/imgs/cat-hat-408x400x0x0x408x400x1672799785.jpg';
    elem.classList.add("cardPicture");
    elem.style.width="100%";
    elem.style.height="100px";
    document.getElementById(innerCard).appendChild(elem);    
    document.getElementById(mouseOverCardId).style.width="120px";
    document.getElementById(innerCard).style.width="118px";
    },300);
    playerTurn=2;
    playerFirstChoice=1;
    } else if (mouseOverCardId==="card" + "Border" + 1) {
      setTimeout(()=>{
        // Places and image on the card
        let elem = document.createElement("img")
        elem.src = 'https://esl-classroom-games.com/wp-content/uploads/brizy/imgs/cat-hat-408x400x0x0x408x400x1672799785.jpg';
        elem.classList.add("cardPicture");
        elem.style.width="100%";
        elem.style.height="100px";
        document.getElementById(innerCard).appendChild(elem);    
        document.getElementById(mouseOverCardId).style.width="120px";
        document.getElementById(innerCard).style.width="118px";
        },300); 
        playerTurn=2;
        playerFirstChoice=0;
}}

function turnSecondCard () {
  console.log("second turn");
  if (mouseOverCardId==="card"+ "Border" + 1 && playerFirstChoice===1) {
    setTimeout(()=>{
    // Places and image on the card
    let elem = document.createElement("img")
    elem.src = 'https://esl-classroom-games.com/wp-content/uploads/brizy/imgs/cat-hat-408x400x0x0x408x400x1672799785.jpg';
    elem.classList.add("cardPicture");
    elem.style.width="100%";
    elem.style.height="100px";
    document.getElementById(innerCard).appendChild(elem);    
    document.getElementById(mouseOverCardId).style.width="120px";
    document.getElementById(innerCard).style.width="118px";
    },300);
    playerTurn=1;
    setTimeout(()=>{
      document.getElementById(mouseOverCardId).style.opacity="0";
      document.getElementById("cardBorder0").style.opacity="0";
    },200);
  } else if(mouseOverCardId==="card"+ "Border" + 0 && playerFirstChoice===0){
    setTimeout(()=>{
    let elem = document.createElement("img")
    elem.src = 'https://esl-classroom-games.com/wp-content/uploads/brizy/imgs/cat-hat-408x400x0x0x408x400x1672799785.jpg';
    elem.classList.add("cardPicture");
    elem.style.width="100%";
    elem.style.height="100px";
    document.getElementById(innerCard).appendChild(elem);    
    document.getElementById(mouseOverCardId).style.width="120px";
    document.getElementById(innerCard).style.width="118px";
    },300); 
    playerTurn=1;
    setTimeout(()=>{
      document.getElementById("cardBorder1").style.opacity="0";
      document.getElementById("cardBorder0").style.opacity="0";
  },200);     
  }}

//    document.getElementById(innerCard).style.width="118px";
//    document.getElementById(mouseOverCardId).style.width="120px";   


// then I will need to match the ids to pictures

// if they match then the player scores a point