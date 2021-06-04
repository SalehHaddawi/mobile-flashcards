import {Decks} from "../types";
import {
    ADD_CARD, AddCardAction,
    CREATE_DECK,
    CreateDeckAction,
    RECEIVE_DECKS,
    ReceiveDecksAction,
    REMOVE_DECK,
    RemoveDeckAction
} from "../actions";

type AppAction = ReceiveDecksAction | CreateDeckAction | AddCardAction;

export default function decks (state: Decks = {}, action: AppAction) {
    let ac;
    switch (action.type) {
        case RECEIVE_DECKS:
            ac = action as ReceiveDecksAction;

            return {
                ...state,
                ...ac.decks
            }
        case CREATE_DECK:
            ac = action as CreateDeckAction;

            return {
                ...state,
                [ac.title]: {
                    title: ac.title,
                    questions: []
                }
            }
        case REMOVE_DECK:
            ac = action as RemoveDeckAction;

            const _state = {
                ...state
            }

            delete _state[ac.title];

            return _state;
        case ADD_CARD:
            ac = action as AddCardAction;

            return {
                ...state,
                [ac.deckTitle]: {
                    title: ac.deckTitle,
                    questions: state[ac.deckTitle].questions.concat({
                        question: ac.question,
                        answer: ac.answer
                    })
                }
            }
        default:
            return state;
    }
}
