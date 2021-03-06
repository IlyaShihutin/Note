import React from 'react';
import Input from "./Input/index"
const FilterNote = ({ setFilterTag }) => {

    const handleFilter = (stringTag) => {
        const tag = stringTag[0] === "#" ? stringTag.substr(1, stringTag.length - 1).trim() : stringTag.trim();
        setFilterTag(tag);
    }
    
    return (
        <div className="filter_block">
            <Input name="Фильтровать" onClick={handleFilter} />
        </div>
    );
}
export default FilterNote;
