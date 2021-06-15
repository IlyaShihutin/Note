import React, { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
        localStorage.setItem("notes", JSON.stringify(newNotes));
    }

    const openEdit = (id) => {
        setEdit(edit => [...edit, id]);
    }
    const closeEdit = (id) => {
        const newEdit = edit.filter(elem => elem !== id)
        setEdit(newEdit);
    }
    const handleEdit = (note, id) => {
        if (note) {
            const [text, tag] = breakString(note)
            const objNote = notes;
            for (var i in objNote) {
                if (objNote[i].id === id) {
                    objNote[i].text = text;
                    objNote[i].tag = tag;
                    break;
                }
            }
            dispatch(actionNote.handleChangeNote(objNote))
            localStorage.setItem("notes", JSON.stringify(objNote));
        } else {
            delNote(id);
        }
        closeEdit(id)
    }

    return (
        <div className="note_list">
            {list?.map((elem, index) => {
                return <div className="note_item" key={`${elem.id}+${index}`}>
                    {!edit.includes(elem.id) ? <>
                        <div className="note_text">
                            <p>{elem.text}
                                &nbsp;
                                {elem.tag && elem.tag.map((tag) => <span key={`${elem.id} + ${tag}`}>#{tag}</span>)}
                            </p>
                        </div>
                        <button className="edit_btn" onClick={() => openEdit(elem.id)}>Редактировать</button>
                    </>
                        :
                        <>
                            <Input name="Сохранить" edit={true} id={elem.id} defaultValue={`${elem.text}${elem.tag.length ? `#${elem.tag.join("#")}` : ""}`} onClick={handleEdit} />
                        </>
                    }
                    <button className="close_btn" onClick={() => delNote(elem.id)}>Удалить</button>
                </div>
            })}
        </div>
    );
}
export default NoteList;

