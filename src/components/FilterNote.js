/* global chrome */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input from "./Input/index"
const FilterNote = ({ setFilterTag }) => {
    const handleFilter = (stringTag) => {
        const tag = stringTag[0] === "#" ? stringTag.substr(1, stringTag.length - 1) : stringTag;
        setFilterTag(tag);
    }
    return (
        <div className="filter_block">
            <Input name="Фильтровать" onClick={handleFilter} />
        </div>
    );
}
export default FilterNote;
