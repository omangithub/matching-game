const gameBox = document.querySelector("#gameBox");

// First I will need to create a grid of cards with different ids

function gridCreator () {
  for (let i=0; i<12; i++) {
    let div = document.createElement("div");
    div.style.width="100px";
    div.style.height="100px";
    div.style.background="red";
    div.style.color="white";
    div.innerHTML="Hello"
    div.id="card" + i;
    div.classList.add("playingCards")
    console.log("hello there")
    document.getElementById("gameBox").appendChild(div);
  }
}

gridCreator()

// then I will need to randomize the playing cards

// then I will need to match the ids to pictures



// then I will need to make the cards turn over when they have been clicked

// if they match then the player scores a point