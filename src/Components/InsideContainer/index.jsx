import React from "react";
import { Wrapper } from './styles';

function InsideContainer({ left, middle, right }) {
    return <Wrapper>
        <div>{left}</div>
        <div>{middle}</div>
        <div>{right}</div>
    </Wrapper>
}

export default InsideContainer;