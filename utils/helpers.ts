import AsyncStorage from "@react-native-async-storage/async-storage";
import {Deck, Question} from "../types";

export const DECKS_KEY = 'mobile-flashcards:cards';

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

export function addCardToDeck (deckTitle: string, card: Question) {
    const decks = AsyncStorage.getItem(DECKS_KEY).then<Deck>(JSON.parse);

    decks[deckTitle].questions.concat({
        question: card.question,
        answer: card.answer
    });

    AsyncStorage.setItem(DECKS_KEY, JSON.stringify(decks));
}
