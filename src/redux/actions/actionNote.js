import { notesConstants } from '../../_constants/notesConstants';

export const actionNote = {
    handleAddNote,
    handleDelNote,
    handleChangeNote
};

function handleAddNote(newNote) {
    return { type: notesConstants.ADD_NOTE, newNote };
}
function handleDelNote(newNotes) {
    return { type: notesConstants.DEL_NOTE, newNotes };
}
function handleChangeNote(newNotes) {
    return { type: notesConstants.CHANGE_NOTE, newNotes };
}