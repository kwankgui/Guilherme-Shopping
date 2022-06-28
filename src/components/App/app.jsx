import React from "react";
import { Wrapper, Container } from './styles';
import HeaderHome from '../HeaderHome';
import InsideContainer from '../InsideContainer';

function App() {
    return <Wrapper>
        <Container>
            <HeaderHome />
            <InsideContainer />
        </Container>
    </Wrapper>
}

export default App;