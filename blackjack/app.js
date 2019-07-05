// Author: Avic Ndugu
// License: Open source
let suits= ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
let values= ['Ace','2','3','4','5','6','7','8','9','10','Queen','Jack','King']; 
let textArea=document.getElementById('text-area');
let newGameButton=document.getElementById('new-game-button');
let hitButton=document.getElementById('hit-button');
let stayButton=document.getElementById('stay-button');

// Hit and stay buttons should be hidden when the game starts
hitButton.style.display="none";
stayButton.style.display="none";

newGameButton.addEventListener('click', function() {
    textArea.innerText='Started!';
    hitButton.style.display="inline";
    stayButton.style.display="inline";
    newGameButton.style.display="none";
});
function createDeck() {
    let deck=[];
    for(let suitX=0; suitX<suits.length; suitX++){
        console.log(suitX,suits[suitX]);
        for(let valueX=0; valueX<values.length; valueX++){
            // console.log(value[valueX],suits[suitX]);
            let card= {
                suit:suits[suitX],
                value:values[valueX]
            }
            deck.push(card);
            // deck.push(values[valueX]+ " of " +suits[suitX]);
        }
    }
    return deck;
}
function getCardString(card) {
    return card.value+ " of " + card.suit;    
}

let deck= createDeck();

function getNextCard() {
    return deck.shift();
}

console.log(deck);
let player1Cards=[getNextCard(),getNextCard(),getNextCard()];


console.log("You are dealt: ");
console.log(getCardString(player1Cards[0]));
console.log(getCardString(player1Cards[1]));


