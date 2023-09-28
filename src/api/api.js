import axios from "axios";



export const getList = (setState) => {
    axios.get("https://api.themoviedb.org/3/movie/popular?api_key=6bbe7e084e618c4f5daf232a447be52c&language=pt-BR&page=1")
        .then((response) => {
            setState(response.data.results)
        }).catch((error) => {
            console.log(error)
        })
}


export const getDetail = async (id, setState) => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=6bbe7e084e618c4f5daf232a447be52c&language=pt-BR`)
        .then((response) => {
            setState(response.data)
        }).catch((error) => {
            console.log(error)
        })
}
