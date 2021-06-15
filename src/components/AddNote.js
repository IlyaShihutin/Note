
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input from "./Input/index"
import { actionNote } from "../redux/actions/actionNote"
import { breakString } from "../_constants/function"
const AddNote = () => {
    const dispatch = useDispatch();
    const notes = useSelector(state => state.notesReducer.notes);

    const onClick = (note) => {
        if (note) {
            const [text, tag] = breakString(note)
            const objNote = {
                text,
                tag,
                id: notes.length ? notes[notes.length - 1].id + 1 : 1,
            }
            dispatch(actionNote.handleAddNote(objNote))

            const localNotes = notes;
            localNotes.push(objNote);
            localStorage.setItem("notes", JSON.stringify(localNotes));
        }
    }
    return (
        <div className="add_note_block">
            <Input name="Добавить заметку" onClick={onClick} />
        </div>
    );
}
export default AddNote;

