/* global chrome */
import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TagList from "./TagList"
import { breakString, handleFilterTag } from "../_constants/function"
import { actionNote } from "../redux/actions/actionNote"
import Input from "./Input/index"
const NoteList = ({ filterTag }) => {
    const [edit, setEdit] = useState([]);
    const notes = useSelector(state => state.notesReducer.notes);
    const list = useMemo(() => notes ? handleFilterTag(notes, filterTag) : [], [notes, filterTag]);
    const dispatch = useDispatch();

    const delNote = (id) => {
        const newNotes = notes.filter(elem => elem.id !== id)
        dispatch(actionNote.handleDelNote(newNotes))
    }

    const openEdit = (id) => {
        setEdit(edit => [...edit, id]);
    }

    const handleEdit = (note, id) => {
        if (note) {
            const [text, tag] = breakString(note)
            const objNote = {
                text,
                tag,
                id: id,
            }
            dispatch(actionNote.handleAddNote(objNote))
        } else {
            delNote(id);
        }
    }

    return (
        <div className="note_list">
            {list?.map((elem, index) => {
                return <div className="note_item" key={`${elem.id}+${index}`}>
                    {!edit.includes(elem.id) ? <>
                        <div className="note_text">
                            <p>{elem.text}
                                {elem.tag !== "" && elem.tag.map((tag) => <span key={`${elem.id} + ${tag}`}>#{tag}</span>)}</p>
                        </div>
                        <button onClick={() => openEdit(elem.id)}>Редактировать</button>
                    </>
                        :
                        <>
                            <Input name="Сохранить" edit={true} defaultValue={`${elem.text}${elem.tag !== "" ? "#" + elem.tag.join("#") : ""}`} onClick={handleEdit} />
                        </>
                    }

                    <button onClick={() => delNote(elem.id)}>Удалить</button>
                </div>
            })}
        </div>
    );
}
export default NoteList;

