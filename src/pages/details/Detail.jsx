import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { Footer } from "../../components/footer/Footer"
import { Header } from "../../components/header/header"
import { Grid, MainContainer, RightSide } from "./DetailStyle"


export function Detail() {

    const state = useSelector((state) => state.fullflix.movie)

    return (
        <MainContainer>
            <Header title={state.title}/>
            <Grid>
                <img src={`https://image.tmdb.org/t/p/w500/${state.poster_path}`}
                    alt={state.title} />
                <RightSide>
                    <p><b>Titulo:</b> {state.title}</p>
                    <p><b>Sinopse:</b> {state.overview}</p>
                    <p><b>Data de lançamento:</b> {state.release_date}</p>
                    <p><b>Nota:</b> {state.vote_average}</p>
                    <Link to={"/"}>Voltar para a home</Link>

                </RightSide>

            </Grid>
            <Footer text='FullFlix @ 2023. Todos os direitos reservados. | Detail' />
        </MainContainer>
    )
}

export default Detail 