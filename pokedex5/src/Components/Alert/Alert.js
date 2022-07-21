import React, { useContext } from 'react'
import { ContainerAlert, DescriptionAlert, TextAlert, TitleAlert } from './styled'
import { GlobalContext } from '../Global/GlobalContext'

export default function Alert() {
    const { alert, setAlert, select } = useContext(GlobalContext)

    return (
        <>
            {alert &&
                <ContainerAlert onClick={() => setAlert(false)}>
                    <TextAlert>
                        {select === 'catch' &&
                            <>
                <TitleAlert>Gotcha!</TitleAlert>
                <DescriptionAlert>O Pokémon foi adicionado a sua Pokédex</DescriptionAlert>
                </>
                }
                        {select === 'remove' &&
                            <>
                <TitleAlert>Oh, no!</TitleAlert>
                <DescriptionAlert>O Pokémon foi removido da sua Pokedéx</DescriptionAlert>
                </>
                }
                </TextAlert>
        </ContainerAlert>}
        </>
    )
}
