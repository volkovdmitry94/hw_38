import {suits, values} from "../const/constants";
import {Deck} from "./Deck";
import {getPlayerFromStore, savePlayerToStore} from "../data/sessionStore";

export class DataManager {
    static newGame() {
        const deck = new Deck();
        deck.createDeck(suits, values);
        deck.shuffle();
        return deck.deck;
    }
    static savePlayerToLocal(isWin) {
        savePlayerToStore(isWin);
    }
    static getPlayerFromLocal() {
        return getPlayerFromStore();
    }
}

export default DataManager;