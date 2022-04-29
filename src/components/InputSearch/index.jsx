import React from 'react'
import { SearchContainer } from "./styles";

const InputSearch = ({ value, onChange, onBlur, children}) => {
    return (
        <div>
            <SearchContainer>
                <input type="text"
                    placeholder="Search by name"
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                />             
            </SearchContainer>
           {children}
        </div>
    )
}

export default InputSearch;