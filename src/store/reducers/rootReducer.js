import { position_add_action } from "../actions/types";

export default function rootReducer (state, action) {
    switch (action.type) {
        case position_add_action:
            return { 
                ...state,
                arrPosition: [...state.arrPosition, action.text]
            }
        default:
            return state
    }
}