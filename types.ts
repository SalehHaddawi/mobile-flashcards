import Decks from "./pages/Decks";

export interface Question {
    question: string;
    answer: string;
}

export interface Deck {
    title: string;
    questions: Array<Question>
}

export interface Decks {
    [index: string]: Deck
}
