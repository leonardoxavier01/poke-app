import React from "react";
import { Section } from "./styles";
import PokeList from "../PokeList";
import { InputSearch } from "..";

const PokeSection =() => (
    <Section>
        <InputSearch/>
        <PokeList/>
    </Section>
)

export default PokeSection