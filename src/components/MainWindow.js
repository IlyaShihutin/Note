import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AddNote from "./AddNote"
import FilterNote from "./FilterNote"
import NoteList from "./NoteList"
import { actionNote } from "../redux/actions/actionNote"
const MainWindow = () => {
    const [filterTag, setFilterTag] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem("notes")) {
            const startNotes = JSON.parse(localStorage.getItem("notes"));
            dispatch(actionNote.handleChangeNote(startNotes))
        }
    }, [])
    
    return (
        <div className="wrapper">
            <div className="header">
                <AddNote />
                <FilterNote setFilterTag={setFilterTag} />
            </div>
            <NoteList filterTag={filterTag} />
        </div>
    );
}
export default MainWindow;

