
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { getDetail } from "../../api/api"
import { MainContainer } from "./CardStyle"
import { getMovieInfo } from "../../redux/fullflixSlice"


export const Card = ({ movie }) => {
    const [movieDetail, setMovieDatail] = useState()
    const dispatch = useDispatch()

    const onHoverDetail = async (e) => {
        getDetail(e.target.id, setMovieDatail)
    }

    useEffect(()=>{
       dispatch(getMovieInfo(movieDetail))
    },[movieDetail])

    return (
        <MainContainer to={"/detail"} onMouseEnter={onHoverDetail} id={movie.id}>
            <img className="img" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                id={movie.id}
            />

            <div className="infoContainer">
                <h4>Título: {movie.title}</h4>
                <h4>Nota: {movie.vote_average}</h4>
            </div>

        </MainContainer>

    )

}