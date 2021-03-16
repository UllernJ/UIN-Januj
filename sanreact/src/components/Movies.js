import React from "react";
import { useState } from 'react';
import { getMovies } from "../utils/movieService";
const Movie = (title, actor) => {
    const [data, setData] = useState([])
    const handleClick = async() => {
        const allMovies = await getMovies();
        setData(allMovies);
    };
    return(
        <>
        {data?.length > 0 ? <p>{JSON.stringify(data)}</p> : null}
        <button onClick="handleClick">GET MOVIES!</button>
        </>
    )
}
export default Movie;