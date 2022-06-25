import React from "react";
import { Wrapper, Container } from './styles';
import HeaderHome from '../HeaderHome';
import InsideContainer from '../InsideContainer';

function App() {
    return <Wrapper>
        <Container>
            <HeaderHome />
            <InsideContainer
                left={<div style={{backgroundColor: 'red'}}>
                    Produtos Disponíveis
                </div>}
                middle={<div style={{backgroundColor: 'green'}}>
                    Lista de Compras
                </div>}
                right={<div style={{backgroundColor: 'blue'}}>
                    Estatísticas
                </div>}
            />
        </Container>
    </Wrapper>
}

export default App;