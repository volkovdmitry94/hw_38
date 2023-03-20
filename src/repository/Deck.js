class Card {
    #suit;
    #value;
    #cardName;
    #power;

    constructor(suit, value) {
        this.#suit = suit;
        this.#value = value;
        this.#cardName = `${value} of ${suit}`;
        this.#power = this.powerFunc(value);
    }

    powerFunc(value) {
        switch (value) {
            case 'Jack':
                return 11;
            case 'Queen':
                return 12;
            case 'King':
                return 13;
            case 'Ace':
                return 14;
            default:
                return +value;
        }
    }

    get cardName() {
        return this.#cardName;
    }

    get power() {
        return this.#power;
    }
}

export class Deck {
    #deck;

    constructor() {
        this.#deck = [];
    }

    createDeck(suits, values) {
        for (let suit of suits) {
            for (let value of values) {
                this.#deck.push(new Card(suit, value));
            }
        }
    }

    shuffle() {
        let arr = this.#deck;
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    get deck() {
        return this.#deck;
    }
}
