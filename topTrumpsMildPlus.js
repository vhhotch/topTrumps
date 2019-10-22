//I made a class to be able to easily be able to create lots of cards 

class PackofCardsAnimals {
    constructor (name, cuteness, scariness, wildness, beauty, intelligence) {
        this._deckname = "Animal Top Trumps";
        this.name = name;
        this.cuteness = cuteness;
        this.scariness = scariness;
        this.wildness = wildness
        this.beauty = beauty
        this.intelligence = intelligence;
    }
}

//I created an array so that I could add the new card objects to it as I created them. 
let listofAnimalCardsDeck = [];

//for now I have only created a deck with 12 cards because I wanted to make sure the game worked. 

const giraffeCard = new PackofCardsAnimals ("Giraffe", 50, 64, 89, 54, 43)
listofAnimalCardsDeck.push (giraffeCard)

const hippoCard = new PackofCardsAnimals ("Hippo", 54, 32, 68, 32, 19)
listofAnimalCardsDeck.push (hippoCard)

const catCard = new PackofCardsAnimals ("Cat", 23, 29, 54, 23, 9)
listofAnimalCardsDeck.push (catCard)

const dogCard = new PackofCardsAnimals ("Dog", 64, 30, 55, 24, 15)
listofAnimalCardsDeck.push (dogCard)

const rabbitCard = new PackofCardsAnimals ("Rabbit", 32, 56, 21, 78, 15)
listofAnimalCardsDeck.push (rabbitCard)

const spiderCard = new PackofCardsAnimals ("Spider", 34, 23, 99, 4, 1)
listofAnimalCardsDeck.push (spiderCard)

const bearCard = new PackofCardsAnimals ("Bear", 89, 32, 76, 32, 11)
listofAnimalCardsDeck.push (bearCard)

const wolfCard = new PackofCardsAnimals ("Wolf", 87, 31, 54, 89, 12)
listofAnimalCardsDeck.push (wolfCard)

const lionCard = new PackofCardsAnimals ("Lion", 12, 35, 58, 49, 52)
listofAnimalCardsDeck.push (lionCard)

const tigerCard = new PackofCardsAnimals ("Tiger", 65, 45, 52, 41, 42)
listofAnimalCardsDeck.push (tigerCard)

const pumaCard = new PackofCardsAnimals ("Puma", 13, 32, 51, 44, 62)
listofAnimalCardsDeck.push (pumaCard)

const elephantCard = new PackofCardsAnimals ("Elephant", 52, 25, 38, 43, 21)
listofAnimalCardsDeck.push (elephantCard)


//the variables that I need to create my game. 

let decksize = listofAnimalCardsDeck.length 
let player1Deck = [];
let player1DeckSize = player1Deck.length;
let player2Deck = []; //this for now is the pile
let player2DeckSize = player2Deck.length;
let currentStatistic = "cuteness";
let holdingDeck = [];
let winsOfCard = 0;

//I created a function to allow me to shuffle the array randomly.

const shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
}

shuffle (listofAnimalCardsDeck)

//at the moment I need to include .length because the card deck has less than 30 cards. When it is a full deck it can be updated so that it is one less thing. 
const dealTheDeck = (deckLength, deck) => {
    for (i=0; i<deckLength; i++){
        if (i%2==0) {
        player2Deck.push (deck[i]);
    }
    else {
        player1Deck.push (deck[i]);
    }
    }
}

//I have a function startGame() that initialises the game and starts to run all of the functions needed in the correct order.

const startGame = () => {
    console.log ("Welcome to the game! We are comparing statistics for 'cuteness'")
    player1turn()
}


// in the mild version of the game there is only one player (playing against the deck), for the two player game I will create an opposite function.

const player1turn = () => {
    console.log(`Your card statistic is ${player1Deck[0].cuteness}, the pile has a card statistic is ${player2Deck[0].cuteness}.`)
    if (player1Deck[0].cuteness > player2Deck[0].cuteness){
        player1Deck.push(player2Deck.shift())
        player1Deck.push(player1Deck.shift())
        if ((player1Deck.length > 0) && (player2Deck.length > 0)) {
        console.log (`Player 1 you win the card! You now have ${player1Deck.length} cards, and the pile has ${player2Deck.length}`)
        player1turn();
        }        
        else if ((player2Deck.length==0)) {
            console.log (`You win the game! There are no more cards in the pile!`)
        }
        else if ((player1Deck.length==0)) {
            console.log (`Sorry, that was your last card, the pile wins this time!`)
        }
    }
    else if (player2Deck[0].cuteness > player1Deck[0].cuteness){
        player2Deck.push(player1Deck.shift())
        player2Deck.push(player2Deck.shift())
        console.log (`The pile wins the card, the pile now had ${player2Deck.length} cards. You have ${player1Deck.length} cards.`)
        if ((player1Deck.length > 0) && (player2Deck.length > 0)) {
            player1turn()
        }        
        else if ((player2Deck.length==0)) {
            console.log (`You win the game! There are no more cards in the pile!`)
        }
        else if ((player1Deck.length==0)) {
            console.log (`Sorry, that was your last card, the pile wins this time!`)
        }   
    }     
}

shuffle(listofAnimalCardsDeck);

dealTheDeck (decksize, listofAnimalCardsDeck)


// console.log (player1Deck.length)
// console.log (player1Deck)

startGame();
