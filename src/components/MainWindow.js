/* global chrome */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddNote from "./AddNote"
import FilterNote from "./FilterNote"
import NoteList from "./NoteList"
const MainWindow = () => {
    const [filterTag, setFilterTag] = useState("");

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

