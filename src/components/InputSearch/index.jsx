import React from "react";

import { SearchContainer, SearchWrapper, Input } from "./styles";
import { FiSearch } from "react-icons/fi";

const InputSearch = ({value, onChange, onClick}) => {
    return (
        <SearchContainer>
                <input type="text" 
                placeholder="Search by name"
                value={value}
                onChange={onChange}
                />
                <button onClick={onClick} ><FiSearch size={20} /></button>
        </SearchContainer>
    )
}

export default InputSearch;