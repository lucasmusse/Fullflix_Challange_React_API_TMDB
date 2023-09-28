import { useEffect, useState } from "react"
import { getList } from "../../api/api"
import { Card } from "../../components/card/Card"
import { Footer } from "../../components/footer/Footer"

import { MainContainer, Part1, Part2, Grid } from "./HomeStyle"


function Home() {

    const [movies, setMovies] = useState([])

    useEffect(() =>{
        getList(setMovies)
    },[])


    return (
        <MainContainer>
            <Part1 />
            <Part2>
                <p>Filmes Populares</p>
            </Part2>
            <Grid>
            
            {movies.map((movie)=>{
                    return <Card movie={movie}/>
                })}
            
            </Grid>

            <Footer movies={movies} text='FullFlix @ 2023. Todos os direitos reservados. | Home'/>
        </MainContainer>
    )
}

export default Home