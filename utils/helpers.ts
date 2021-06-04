import AsyncStorage from "@react-native-async-storage/async-storage";
import {Question} from "../types";

export const DECKS_KEY = 'mobile-flashcards:deck';

export function getDecks () {
    return AsyncStorage.getItem(DECKS_KEY).then(JSON.parse);
}

export function getDeck (id: string) {
    return AsyncStorage.getItem(DECKS_KEY).then(JSON.parse).then((data) => data[id]);
}

export function saveDeckTitle (title: string) {
    AsyncStorage.getItem(DECKS_KEY).then(JSON.parse).then((data) => {
        if (!data) {
            data = {};
        }

        data[title] = {
            title,
            questions: []
        }

        AsyncStorage.setItem(DECKS_KEY, JSON.stringify(data));
    });
}

export function removeDeck (title: string) {
    AsyncStorage.getItem(DECKS_KEY).then(JSON.parse).then((data) => {
        if (!data) {
            data = {};
        }

        data[title] = undefined;

        delete data[title];

        AsyncStorage.setItem(DECKS_KEY, JSON.stringify(data));
    });
}

export function addCardToDeck (deckTitle: string, card: Question) {
    AsyncStorage.getItem(DECKS_KEY).then(JSON.parse).then((data) => {
        data[deckTitle].questions.push({
            question: card.question,
            answer: card.answer
        });

        AsyncStorage.setItem(DECKS_KEY, JSON.stringify(data));
    });
}
