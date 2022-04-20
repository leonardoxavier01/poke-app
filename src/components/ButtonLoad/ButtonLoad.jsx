import React from 'react'
import { ButtonLoadMore, ContainerButton } from './styles'

const ButtonLoad = ({onClick, text}) => {
    return (
        <ContainerButton>
            <ButtonLoadMore onClick={onClick}>{text}
            </ButtonLoadMore>
        </ContainerButton>
    )
}

export default ButtonLoad