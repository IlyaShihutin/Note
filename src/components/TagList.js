/* global chrome */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
const TagList = ({ tagArray }) => {
    return (
        <>
            {tagArray.map((elem, index) => {
                return <p key={`${index} + ${elem}`}>{elem}</p>
            })}
        </>
    );
}
export default TagList;

