import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    span {
        font-size: 22px;
        color: #004d61;
        margin-bottom: 4px;
        margin-top: 25px;
    }
`;

export const ProgressBar = styled.div`
    height: 24px;
    border-radius: 3px;
    background-color: ${props => props.color ? props.color : "#004d61" };
    width: ${props => props.percentage ? props.percentage : 0}%;
    transition: 2000ms;
`;