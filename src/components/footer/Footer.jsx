import { MainContainer } from "../../components/footer/FooterStyle"

export function Footer({text}){
    return (
        <MainContainer>
            <p>{text}</p>
        </MainContainer>
    )
}