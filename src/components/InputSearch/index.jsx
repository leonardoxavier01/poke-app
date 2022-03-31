import React from "react";
/* import { filterPokemons } from "../Card"; */

import { SearchContainer, SearchWrapper, Input } from "./styles";

function handleFilter(filter){
console.log(filter)
}

const InputSearch = () => (
    <SearchContainer>
        <SearchWrapper>
            <Input type="text" placeholder="Search by name"
                onChange={(event) => {
                    const valor = event.target.value;
                    handleFilter(valor);
                }}
            />
        </SearchWrapper>
    </SearchContainer>
)

export default InputSearch;