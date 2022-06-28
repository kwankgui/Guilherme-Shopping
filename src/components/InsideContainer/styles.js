import styled from "styled-components";

export const Wrapper = styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 24px;
    grid-column-gap: 24px;
    height: "1vh";
`;

export const SubContainer = styled.div`
    flex-wrap: wrap;
    font-weight: bold;
    font-size: 24px;
`;

export const TotalPrice = styled.div`
    margin-top: 15px;
    font-size: 30px;
`;
export const TotalText = styled.div`
    margin-top: 180px;
    font-size: 30px;
`;