// class cardDeck {
//     constructor (deckName, cardNamesList, cardStats){
//     this.deckName = deckName;
//     this._noOfCards = 30;
//     this.cardNamesList = []
//     this._noOfCardStats = 5
//     this.cardStats = [];
//     this._deckOfCards = []
//     }

// createCard () {
//     for (i=0; i<this._noOfCards; i++ ){
//          }
//     }
// }



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

let listofAnimalCardsDeck = [];


const giraffeCard = new PackofCardsAnimals ("Giraffe", 50, 64, 89, 54, 43)
listofAnimalCardsDeck.push (giraffeCard)

const hippoCard = new PackofCardsAnimals ("Hippo", 54, 32, 68, 32, 19)
listofAnimalCardsDeck.push (hippoCard)

const catCard = new PackofCardsAnimals ("Cat", 54, 29, 54, 23, 9)
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
listofAnimalCardsDeck.push (bearCard)

const lionCard = new PackofCardsAnimals ("Lion", 87, 35, 58, 49, 52)
listofAnimalCardsDeck.push (lionCard)

const tigerCard = new PackofCardsAnimals ("Tiger", 65, 45, 52, 41, 42)
listofAnimalCardsDeck.push (lionCard)

const pumaCard = new PackofCardsAnimals ("Puma", 13, 32, 51, 44, 62)
listofAnimalCardsDeck.push (pumaCard)

const elephantCard = new PackofCardsAnimals ("Elephant", 52, 25, 38, 43, 21)
listofAnimalCardsDeck.push (elephantCard)


const shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
}

shuffle (listofAnimalCardsDeck)
console.log (listofAnimalCardsDeck)


const shuffleAndDeal = (deck) => {
    shuffle(deck);
    deal();
}


// let player1Deck = 
// let player2Deck = []