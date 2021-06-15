import { notesConstants } from '../../_constants/notesConstants';
let initialState = {
    notes: []
};
export default function notesReducer(state = initialState, action) {
    switch (action.type) {
        case notesConstants.ADD_NOTE:
            return {
                ...state,
                notes: [...state.notes, action.newNote],
            }
        case notesConstants.DEL_NOTE:
            return {
                ...state,
                notes: action.newNotes,
            }
        case notesConstants.CHANGE_NOTE:
            return {
                ...state,
                notes: [...action.newNotes],
            }
        default: return state
    }
}