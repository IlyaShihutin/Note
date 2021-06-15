
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input from "./Input/index"
import { actionNote } from "../redux/actions/actionNote"
import { breakString, unique, scroll } from "../_constants/function"
const AddNote = () => {
    const [error, setError] = useState(false)
    const dispatch = useDispatch();
    const notes = useSelector(state => state.notesReducer.notes);

    const onClick = (note) => {
        const [text, tag] = breakString(note)
        if (text) {
            const objNote = {
                text,
                tag: unique(tag),
                id: notes.length ? notes[notes.length - 1].id + 1 : 1,
            }
            dispatch(actionNote.handleAddNote(objNote))

            const localNotes = notes;
            localNotes.push(objNote);
            localStorage.setItem("notes", JSON.stringify(localNotes));
            scroll(objNote.id);
        } else {
            setError(true)
        }
    }
    return (
        <div className="add_note_block">
            <Input name="Добавить заметку" error={error} setError={setError} onClick={onClick} />
        </div>
    );
}
export default AddNote;

