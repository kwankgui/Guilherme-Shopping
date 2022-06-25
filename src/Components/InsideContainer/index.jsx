import React, { useState } from "react";
import { SubContainer, Wrapper } from './styles';
import Checkbox from "../../Shared/Checkbox"; 

function InsideContainer() {
    const [getData, setData] = useState(false)

    return <Wrapper>
        <SubContainer>Produtos Disponíveis
            <Checkbox
                title="Alface"
                value={getData}
                onClick={() => setData(!getData)}
            />
        </SubContainer>
        <SubContainer>Lista de Compras
            <Checkbox />
        </SubContainer>
        <SubContainer>Estatísticas

        </SubContainer>
    </Wrapper>
}

export default InsideContainer;