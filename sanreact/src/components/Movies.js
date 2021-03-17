import React, { useEffect } from "react";
import { useState } from 'react';
import { getMovies } from "../utils/movieService";

const Movie = (name, actor) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
       const fetchDataAsync = async() => {
           try {
            const allMovies = await getMovies();
            setData(allMovies);

           } catch(error) {
            setError(error);
           }
       }
       fetchDataAsync();
    }, []);

    return(
        <>
        <h2>Movies</h2>
        <div id="container">
            {data?.length > 0
            ? data.map((data) => <div class="movieContainer"><p>Movie name: {data.name}</p>  <p>Skuespiller {data.actor}</p>
            <img src={data.imageUrl}></img>
            </div>)
        :null}
        </div>
        </>
    );
};
export default Movie;