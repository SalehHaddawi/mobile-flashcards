import {Decks} from "../types";
import {CREATE_DECK, CreateDeckAction, RECEIVE_DECKS, ReceiveDecksAction} from "../actions";

type AppAction = ReceiveDecksAction | CreateDeckAction;

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
        default:
            return state;
    }
}
