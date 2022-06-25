import styled from "styled-components";
import wave from '../../Assets/wallpaper.svg'

export const Wrapper = styled.div`
    height: 100vh;
    background-color: #F8F5EC;
    background-image: url(${wave});
    background-size: cover;
    background-position: center center;
    display: flex ;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    background-color: #FFFFFF;
    width: 95%;
    height: 90%;
    border-width: 2;
    border-color: blue;
    box-shadow: 0 3px 10px rgba(0,0,0, .15);
    border-radius: 30px;
`;