import {Decks, Question} from "../types";

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const CREATE_DECK = 'CREATE_DECK';
export const REMOVE_DECK = 'REMOVE_DECK';
export const ADD_CARD = 'ADD_CARD';

export interface ReceiveDecksAction {
    type: string;
    decks: Decks;
}

export interface CreateDeckAction {
    type: string;
    title: string;
}

export interface RemoveDeckAction {
    type: string;
    title: string;
}

export interface AddCardAction {
    type: string;
    deckTitle: string;
    question: string;
    answer: string;
}

export function receiveDecks(decks: Decks): ReceiveDecksAction {
    return {
        type: RECEIVE_DECKS,
        decks
    }
}

export function createDeck(title: string): CreateDeckAction {
    return {
        type: CREATE_DECK,
        title
    }
}

export function removeDeck(title: string): RemoveDeckAction {
    return {
        type: REMOVE_DECK,
        title
    }
}

export function addCard(deckTitle: string, card: Question): AddCardAction {
    return {
        type: ADD_CARD,
        deckTitle,
        question: card.question,
        answer: card.answer
    }
}
