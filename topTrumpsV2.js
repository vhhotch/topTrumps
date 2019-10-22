class AnimalCard {
    constructor (name, cuteness, scariness, wildness, beauty, intelligence) {
        this.name = name;
        this.cuteness = cuteness;
        this.scariness = scariness;
        this.wildness = wildness
        this.beauty = beauty
        this.intelligence = intelligence;
    }
}

class FoodCard {
    constructor (name, spice, sweetness, crunch, acidity, health) {
        this.name = name;
        this.spice = spice;
        this.sweetness = sweetness;
        this.crunch = crunch;
        this.acidity = acidity;
        this.health = health;
    }
}

class Deck {
    constructor (name, cards){
        this.name = name;
        this.cards = cards;
        this.deckSize = cards.length;
    }

    shuffle () {
        this.cards.sort(() => Math.random() - 0.5);
    }
}

class Game {
    constructor (players, deckOptions){
        this.players = players;
        this.deckOptions = deckOptions;
        this.deckInPlay = null;
    }
    start () {
        alert ("Welcome to the game, press ok to continue.")
        let message = "What deck would you like to play with, enter the relevant number?";
        for (let i=0; i < this.deckOptions.length; i++) {
            message = message.concat (`${i+1}.${this.deckOptions[i].name} `)
        }
        let userDeck = prompt (`${message}`)
        this.deckInPlay = this.deckOptions[(parseInt(userDeck)-1)]
        alert (`Thank you for choosing ${this.deckInPlay.name}`)
        this.deckInPlay.shuffle();
        let noOfCardsPerPlayer= Math.floor(this.deckInPlay.length/this.players.length);
        console.log (`this is deckplay ${this.deckInPlay.length}`)
        console.log (this.players.length)
        console.log (noOfCardsPerPlayer)
        let n = 0;
        let deckCardNo = 0;
        do {
            for (let p=0; p<this.players.length; p++){
                this.players[p].hand.push(this.deckInPlay.cards[deckCardNo]);
                deckCardNo++;
            }
        n += 1;
        console.log(n);
        } while (n < noOfCardsPerPlayer);
        console.log (this.players[0].hand)
        // let cardsdealtmessage = ("Thank you the cards have now been dealt")
        // for (let c=0; c < noOfCardsPerPlayer.length; c++) {
        //     cardsdealtmessage = cardsdealtmessage.concat (`${this.players[i].name} you have .${this.players[i].hand.length} `)
        // }
        // alert (`${cardsdealtmessage}`)

    } // remember that number validation needs to happen.
}

//deal, loop through deck and distribute to players in turn. 

class Player {
    constructor (name){
        this.name = name;
        this.hand = [];
    }
}


//working on the deal fuction






const animalDeck = new Deck ("Animal Top Trumps", [
    new AnimalCard ("Giraffe", 50, 64, 89, 54, 43),
    new AnimalCard ("Hippo", 54, 32, 68, 32, 19),
    new AnimalCard ("Cat", 23, 29, 54, 23, 9),
    new AnimalCard ("Dog", 64, 30, 55, 24, 15),
    new AnimalCard ("Rabbit", 32, 56, 21, 78, 15),
    new AnimalCard ("Spider", 34, 23, 99, 4, 1),
    new AnimalCard ("Bear", 89, 32, 76, 32, 11),
    new AnimalCard ("Wolf", 87, 31, 54, 89, 12),
    new AnimalCard ("Lion", 12, 35, 58, 49, 52),
    new AnimalCard ("Tiger", 65, 45, 52, 41, 42),
    new AnimalCard ("Puma", 13, 32, 51, 44, 62),
    new AnimalCard ("Elephant", 52, 25, 38, 43, 21)
])

const foodDeck = new Deck ("Food Top Trumps", [
    new FoodCard ("Carrot", 3, 45, 54, 12, 76), 
    new FoodCard ("Pizza", 6, 3, 20, 45, 3),
    new FoodCard ("Chocolate", 3, 48, 24, 36, 4)
])


const gameOne = new Game (
    [new Player ("Vicky"), new Player ("Phil")],
    [animalDeck, foodDeck]
);


gameOne.start()