import styled from "styled-components";
import background from "../../assets/img/background.png"


export const MainContainer = styled.div`

    font-size: 2vw;
    height: fit-content;
    min-height: 100vh;
    background-color:#000;

`

export const Part1 = styled.div`

    height:100vh;
    background-image:url(${background});
    background-position: center;
    background-size:cover;

`

export const Part2 = styled.div`

    height:10vh;
    color: #fff;
    font-size:4vh;
    padding-left:20px;

`

export const Grid = styled.div`
    color: #fff;
    display:grid;
    justify-content: center;
    align-items: center ;
    min-height: 90vh;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    padding: 10vh 0;
    gap:3vw;
    width:80%;
    margin: auto;
`