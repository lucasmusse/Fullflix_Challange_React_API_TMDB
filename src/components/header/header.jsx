import { MainContainer } from "./headerStyle"
import { useSelector } from "react-redux"


export const Header = ({title}) => {

    

    return(
        <MainContainer>
            <h1>{title}</h1>
        </MainContainer>
    )
} 