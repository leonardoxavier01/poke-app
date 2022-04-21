import React from 'react'
import { SearchContainer } from "./styles";
import { FiSearch } from "react-icons/fi";

const InputSearch = ({ value, onClick, onChange, onBlur, children}) => {
    return (
        <>
            <SearchContainer>
                <input type="text"
                    placeholder="Search by name"
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                />
                <button onClick={onClick} ><FiSearch size={20} /></button>
            </SearchContainer>
           {children}
        </>
    )
}

export default InputSearch;