import styled from "styled-components";

export const Wrapper = styled.div`
    height: 64px;
    display: flex;
    align-items: center;
    cursor: default;
`;

export const Indicator = styled.div`
    height: 24px;
    width: 24px;
    border-radius: 12px;
    border: 2px solid #004D61;
    margin-right: 8px;
    cursor: pointer;
    ${props => props.value ? 'background-color: #004D61;' : ''}
`;